import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/templates';
import style from './App.css';
import Header from '../components/Header';
import TemplateList from '../components/TemplateList';
import Create from '../components/Create';
import Settings from '../components/Settings';

const LIST_PAGE = 'list';
const CREATE_PAGE = 'create';
const SETTINGS_PAGE = 'settings';

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
    templates: PropTypes.any,
    actions: PropTypes.any
  };

  getCurrentPage = () => {
    const currentPage = this.props.templates.get('currentPage');
    switch (currentPage) {
      case CREATE_PAGE:
        return <Create />;
      case SETTINGS_PAGE:
        return <Settings />;
      case LIST_PAGE:
      default:
        return <TemplateList />;
    }
  };

  render() {
    const { templates, actions } = this.props;

    return (
      <div>
        <Header />
        {this.getCurrentPage()}
      </div>
    );
  }
}
