import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/templates';

import style from './TemplateItem.css';

@connect(
  state => ({
    templates: state.templates
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)
export default class TemplateItem extends Component {
  static propTypes = {
    itemImage: PropTypes.string,
    itemName: PropTypes.string,
    actions: PropTypes.any,
    templates: PropTypes.any
  };

  handleClick = () => {
    this.props.actions.setSelected(this.props.itemName);
  };

  render() {
    return (
      <div
        className={`${style.templateItem} ${this.props.selected && style.active}`}
        onClick={this.handleClick}
      >
        <div className={style.itemImage}>
          <img alt="Template Preview" src={this.props.itemImage || './img/dummy.png'} />
        </div>
        <div className={style.itemName}>{this.props.itemName}</div>
      </div>
    );
  }
}
