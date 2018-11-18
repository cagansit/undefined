import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './Header.css';
import Search from './Search';
import Menu from './Menu';
import * as Actions from '../actions/templates';
import { LIST_PAGE, CREATE_PAGE } from '../constants/PageTypes';


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
  }

  getHeaderItemsByPageType = () => {
    const currentPage = this.props.templates.get('currentPage');
    switch (currentPage) {
      case CREATE_PAGE:
        return (<div className={style.buttonsContainer}>
          <input className={style.templateName} placeholder="New Template Name" name="templateName" value={this.props.templates.templateName} onChange={this.handleNameInput} />
          <div className={style.tryButton} onClick={this.handleTry} >Try!</div>
          <div className={style.saveButton} onClick={this.handleSave} >Save!</div>
        </div>);
      case LIST_PAGE:
      default:
        return <Search />;
    }
  }

  handleNameInput = event => this.props.actions.setNewTemplateName(event.target.value)

  handleTry = () => {
    const javascriptCode = this.props.templates.get('javascriptCode');
    const cssCode = this.props.templates.get('cssCode');
    console.log(javascriptCode);
    console.log(cssCode);
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
    console.log(requestData);
    fetch('http://localhost:8000/api/template/create', {
      method: 'post',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json()).then((data) => {
      this.props.actions.clearInputs();
      this.props.actions.setPage(LIST_PAGE);
      this.fetchListItems();
    });
  }

  render() {
    return (
      <header className={style.header}>
        <Menu />
        {
          this.getHeaderItemsByPageType()
        }
      </header>
    );
  }
}
