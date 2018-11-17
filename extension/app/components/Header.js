import React, { Component } from 'react';

import style from './Header.css';
import Search from './Search';
import Menu from './Menu';

export default class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <Menu />
        <Search />
      </header>
    );
  }
}
