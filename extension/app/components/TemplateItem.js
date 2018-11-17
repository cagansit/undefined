import React, { Component, PropTypes } from 'react';

import style from './TemplateItem.css';

export default class TemplateItem extends Component {
  static propTypes = {
    itemImage: PropTypes.string,
    itemName: PropTypes.string
  };
  render() {
    return (
      <div className={style.templateItem}>
        <div className={style.itemImage}>
          <img alt="Template Preview" src={this.props.itemImage || './img/dummy.png'} />
        </div>
        <div className={style.itemName}>{this.props.itemName}</div>
      </div>
    );
  }
}
