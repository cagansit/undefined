import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/templates';
import style from './App.css';

@connect(
  state => ({
    templates: state.templates
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    templates: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { templates, actions } = this.props;

    return (
      <div className={style.normal}>
      Tkjadsfkgjhdsakjfgshkjd
        {/* <Header addTodo={actions.addTodo} />
        <MainSection templates={templates} actions={actions} /> */}
      </div>
    );
  }
}
