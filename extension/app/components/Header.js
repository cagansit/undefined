import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './Header.css';
import Search from './Search';
import Menu from './Menu';
import * as Actions from '../actions/templates';
import { LIST_PAGE, CREATE_PAGE, SETTINGS_PAGE } from '../constants/PageTypes';
import * as VariableHandler from '../helpers/VariableHandler';

@connect(
  state => ({
    templates: state.templates
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)
export default class Header extends Component {
  fetchListItems = () => {
    fetch('http://localhost:8000/api/templates')
      .then(response => response.json())
      .then((response) => {
        if (response.status) {
          console.log(response.data);
          this.props.actions.fetchTemplates(response.data);
        }
      });
  };

  fetchPartners = () => {
    fetch('http://localhost:8000/api/template/partners')
      .then(response => response.json())
      .then((response) => {
        if (response.status) {
          this.props.actions.fetchPartners(response.data);
        }
      });
  }

  fetchCampaigns = (partnerName) => {
    fetch(`http://localhost:8000/api/template/campaigns?partnerName=${partnerName}`)
      .then(response => response.json())
      .then((response) => {
        if (response.status) {
          this.props.actions.fetchCampaigns(response.data);
        }
      });
  }

  componentDidMount() {
    this.fetchPartners();
  }

  getHeaderItemsByPageType = () => {
    const currentPage = this.props.templates.get('currentPage');
    switch (currentPage) {
      case CREATE_PAGE:
        return (
          <div className={style.buttonsContainer}>
            <input
              className={style.templateName}
              placeholder="New Template Name"
              name="templateName"
              value={this.props.templates.templateName}
              onChange={this.handleNameInput}
            />
            <div className={style.tryButton} onClick={this.handleTry}>
              Try!
            </div>
            <div className={style.saveButton} onClick={this.handleSave}>
              Save!
            </div>
          </div>
        );
      case SETTINGS_PAGE:
        return [
          <div>
            <div className={style.tryButton} onClick={this.handleTry}>
              Update Preview
            </div>
            <div className={style.saveButton} onClick={this.handleSaveToCampaign}>
              Apply to
            </div>
          </div>,
          <div>
            <div>
              Partner
              <select onChange={this.handlePartner}>
                {
                  this.getPartners()
                }
              </select>
            </div>
            <div>
              Campaign
              <select onChange={this.handleCampaign}>
                {
                  this.getCampaigns()
                }
              </select>
            </div>
          </div>
        ];
      case LIST_PAGE:
      default:
        return <Search />;
    }
  };

  getPartners = () => {
    const partners = this.props.templates.get('partners').toJS();
    return partners.map(partner => <option>{partner.pName}</option>);
  }

  getCampaigns = () => {
    const campaigns = this.props.templates.get('campaigns').toJS();
    return campaigns.map(campaign => <option value={campaign.id} >{campaign.campName}</option>);
  }

  handlePartner = (event) => {
    this.props.actions.setPartner(event.target.value);
    this.fetchCampaigns(event.target.value);
  }

  handleCampaign = (event) => {
    this.props.actions.setCampaign(event.target.value);
  }

  handleNameInput = event => this.props.actions.setNewTemplateName(event.target.value);

  handleTry = () => {
    const javascriptCode = this.props.templates.get('javascriptCode');
    const cssCode = this.props.templates.get('cssCode');
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { javascriptCode, cssCode }, (response) => {});
    });
  };

  getTemplate = () => {
    const selectedItem = this.props.templates.get('items').toJS().find(item => item.selected === true);
    const options = this.props.templates.get('selectedItemOptions');
    let newJavascriptCode = '';
    let newCssCode = '';
    options.toJS().map((option) => {
      const tag = `#{{${option.name}|${option.type}}}`;
      if (!option.value) {
        return;
      }
      newJavascriptCode = VariableHandler.setVariable(option.value, tag, newJavascriptCode || selectedItem.javascriptCode);
      newCssCode = VariableHandler.setVariable(option.value, tag, newCssCode || selectedItem.cssCode);
    });
    return {
      javascriptCode: newJavascriptCode,
      cssCode: newCssCode,
    };
  }

  handleSaveToCampaign = () => {
    const { javascriptCode, cssCode } = this.getTemplate();
    const requestData = {
      partnerName: this.props.templates.get('selectedPartner'),
      data: {
        customJS: javascriptCode,
        customCss: cssCode
      },
      id: this.props.templates.get('selectedCampaign')
    };
    fetch('http://localhost:8000/api/template/setCampaign', {
      method: 'post',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((data) => {
        this.props.actions.clearInputs();
        this.props.actions.setPage(LIST_PAGE);
        this.fetchListItems();
      });
  }

  handleSave = () => {
    const javascriptCode = this.props.templates.get('javascriptCode');
    const cssCode = this.props.templates.get('cssCode');
    const templateName = this.props.templates.get('templateName');
    const requestData = {
      name: templateName,
      description: '',
      image: '',
      javascriptCode,
      cssCode,
      isActive: '1'
    };
    fetch('http://localhost:8000/api/template/create', {
      method: 'post',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((data) => {
        this.props.actions.clearInputs();
        this.props.actions.setPage(LIST_PAGE);
        this.fetchListItems();
      });
  };

  render() {
    return (
      <header className={style.header}>
        <Menu />
        {this.getHeaderItemsByPageType()}
      </header>
    );
  }
}
