import React, { Component } from 'react';

import style from './TemplateList.css';
import TemplateItem from './TemplateItem';

export default class TemplateList extends Component {
  render() {
    return (
      <div id={style.TemplateList}>
        <TemplateItem itemName="Hamburger Menu" />
        <TemplateItem itemName="Notification Center" />
      </div>
    );
  }
}
