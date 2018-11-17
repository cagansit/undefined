import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/templates';
import style from './App.css';
import Header from '../components/Header';
import TemplateList from '../components/TemplateList';

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
      <div>
        <Header />
        <TemplateList />
      </div>
    );
  }
}
