import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/templates';

import style from './Settings.css';
import Option from './Option';

@connect(
  state => ({
    templates: state.templates
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)
export default class Settings extends Component {
  populateOptions = () => {
    const options = this.props.templates.get('selectedItemOptions');
    return options
      .toJS()
      .map(option => (
        <Option optionName={option.name} optionValue={option.value} optionType={option.type} />
      ));
  };

  render() {
    return <div id={style.settings}>{this.populateOptions()}</div>;
  }
}
