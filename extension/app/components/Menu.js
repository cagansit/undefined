import React, { Component } from 'react';

import style from './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div id={style.menu}>
        <div className={style.menuButton}>
          Menu
          <div className={style.menuList}>
            <div className={style.menuListItem}>Create</div>
            <div className={style.menuListItem}>Settings</div>
          </div>
        </div>
      </div>
    );
  }
}
