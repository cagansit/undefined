import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todos';

import style from './Search.css';

@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class Search extends Component {
  handleOnChange = (text) => {
    this.props.actions.searchFilter(text);
  };

  render() {
    return (
      <div className={style.search}>
        <input
          id={style.searchInput}
          onChange={this.handleOnChange}
          value={this.props.todos.searchFilter}
          placeholder="Search template"
        />
        <div>{this.props.todos.searchFilter}</div>
      </div>
    );
  }
}
