import React, { PropTypes, Component } from 'react';

import style from './Header.css';
import Search from './Search';

export default class Header extends Component {
  static propTypes = {};

  render() {
    return (
      <header className={style.header}>
        <Search />
      </header>
    );
  }
}
