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
  render() {
    return (
      <div id={style.TemplateList}>
        {this.props.templates
          .get('items')
          .toJS()
          .filter(
            item =>
              item.name
                .toLowerCase()
                .indexOf(this.props.templates.get('searchFilter').toLowerCase()) > -1
          )
          .map(item => (
            <TemplateItem itemName={item.name} />
          ))}
      </div>
    );
  }
}
