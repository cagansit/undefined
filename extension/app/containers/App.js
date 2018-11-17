import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/templates';
import style from './App.css';
import Header from '../components/Header';
import TemplateList from '../components/TemplateList';
import Create from '../components/Create';

const LIST_PAGE = 'list';
const CREATE_PAGE = 'create';

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


  getCurrentPage = () => {
    const currentPage = this.props.templates.get('currentPage');
    switch (currentPage) {
      case CREATE_PAGE:
        return <Create />;
      case LIST_PAGE:
      default:
        return <TemplateList />;
    }
  }


  render() {
    const { templates, actions } = this.props;

    return (
      <div>
        <Header />
        {
          this.getCurrentPage()
        }
      </div>
    );
  }
}
