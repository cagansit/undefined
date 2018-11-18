import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/templates';

import style from './TemplateList.css';
import TemplateItem from './TemplateItem';

@connect(
  state => ({
    templates: state.templates
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)
export default class TemplateList extends Component {

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

  componentDidMount() {
    this.fetchListItems();
  }

  componentWillUnmount() {
    this.fetchListItems();
  }

  getListItems = () => this.props.templates
          .get('items')
          .toJS()
          .filter(
            item =>
              item.name
                .toLowerCase()
                .indexOf(this.props.templates.get('searchFilter').toLowerCase()) > -1
          )
          .map(item => (
            <TemplateItem key={item.name} itemName={item.name} selected={item.selected} />
          ))

  render() {
    return (
      <div id={style.TemplateList}>
        {
          this.getListItems()
        }
      </div>
    );
  }
}
