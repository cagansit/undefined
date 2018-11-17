import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/templates';

import style from './Search.css';

@connect(
  state => ({
    templates: state.templates
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)
export default class Search extends Component {
  static propTypes = {
    templates: PropTypes.any,
    actions: PropTypes.any
  };

  handleChange = (event) => {
    this.props.actions.setSearchFilter(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          id={style.search}
          placeholder="Search Templates"
          value={this.props.templates.get('searchFilter')}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
