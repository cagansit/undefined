import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/templates';

import style from './Option.css';

@connect(
  state => ({
    templates: state.templates
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)
export default class Option extends Component {
  getSelectedTemplate = () =>
    this.props.templates
      .get('items')
      .toJS()
      .find(item => item.selected === true);

  handleChange = (event) => {
    // const { javascriptCode, cssCode } = this.getSelectedTemplate();
    // const tag = `#{{${this.props.optionName}|${this.props.optionType}}}`;
    this.props.actions.setOptionsValue(this.props.optionName, event.target.value);
  };
  render() {
    return (
      <div className={style.option}>
        <div className={style.name}>{this.props.optionName}</div>
        <input
          className={style.optionInput}
          value={this.props.optionValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
