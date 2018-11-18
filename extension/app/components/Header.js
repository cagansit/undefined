import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './Header.css';
import Search from './Search';
import Menu from './Menu';
import * as Actions from '../actions/templates';
import { LIST_PAGE, CREATE_PAGE } from '../constants/PageTypes';


@connect(
  state => ({
    templates: state.templates
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)
export default class Header extends Component {

  getHeaderItemsByPageType = () => {
    const currentPage = this.props.templates.get('currentPage');
    switch (currentPage) {
      case CREATE_PAGE:
        return (<div className={style.buttonsContainer}>
          <div className={style.tryButton} onClick={this.handleTry} >Try!</div>
          <div className={style.saveButton} onClick={this.handleSave} >Save!</div>
        </div>);
      case LIST_PAGE:
      default:
        return <Search />;
    }
  }

  handleTry = () => {
    const javascriptCode = this.props.templates.get('javascriptCode');
    const cssCode = this.props.templates.get('cssCode');
    console.log(javascriptCode);
    console.log(cssCode);
  }

  handleSave = () => {
    const javascriptCode = this.props.templates.get('javascriptCode');
    const cssCode = this.props.templates.get('cssCode');
    console.log(javascriptCode);
    console.log(cssCode);
  }

  render() {
    return (
      <header className={style.header}>
        <Menu />
        {
          this.getHeaderItemsByPageType()
        }
      </header>
    );
  }
}
