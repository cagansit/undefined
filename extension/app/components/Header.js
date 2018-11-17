import React, { PropTypes, Component } from 'react';

import style from './Header.css';

export default class Header extends Component {
  static propTypes = {};

  search = (text) => {};

  render() {
    return (
      <header className={style.header}>
        <h1>todos</h1>
      </header>
    );
  }
}
