import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as types from '../constants/PageTypes';
import style from './Menu.css';
import * as Actions from '../actions/templates';

@connect(
  state => ({
    templates: state.templates
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)

export default class Menu extends Component {

  static propTypes = {
    actions: PropTypes.func,
  }

  handlePage = page => () => {
    console.log(page);
    this.props.actions.setPage(page);
  }

  render() {
    return (
      <div id={style.menu}>
        <div className={style.menuButton}>
          Menu
          <div className={style.menuList}>
            <div className={style.menuListItem} onClick={this.handlePage(types.LIST_PAGE)}>List</div>
            <div className={style.menuListItem} onClick={this.handlePage(types.CREATE_PAGE)}>Create</div>
            <div className={style.menuListItem} onClick={this.handlePage(types.SETTINGS_PAGE)}>Settings</div>
          </div>
        </div>
      </div>
    );
  }
}
