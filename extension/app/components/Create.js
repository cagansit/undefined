import React, { Component } from 'react';
import { connect } from 'react-redux';
import CodeMirror from 'react-codemirror';
import { bindActionCreators } from 'redux';
import styles from './Create.css';
import * as Actions from '../actions/templates';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');

const CodeMirrorOptions = {
  css: {
    lineNumbers: true,
    mode: 'css',
  },
  javascript: {
    lineNumbers: true,
    mode: 'javascript',
  }
};

@connect(
  state => ({
    templates: state.templates
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)
export default class Create extends Component {

  handleChange = language => (newValue) => {
    this.props.actions.setLanguage({ [language]: newValue });
  }

  render() {
    return (
      <div>
        <div className={styles.codeEditors}>
          <div className={styles.javascriptContainer}>
            <div className={styles.title}>Javascript</div>
            <CodeMirror value={this.props.templates.get('javascriptCode')} onChange={this.handleChange('javascriptCode')} options={CodeMirrorOptions.javascript} />
          </div>
          <div className={styles.cssContainer}>
            <div className={styles.title}>CSS</div>
            <CodeMirror value={this.props.templates.get('cssCode')} onChange={this.handleChange('cssCode')} options={CodeMirrorOptions.css} />
          </div>
        </div>
      </div>
    );
  }
}
