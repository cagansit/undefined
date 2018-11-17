import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import style from './Create.css';

const CodeMirrorOptions = {
  lineNumbers: true,
  mode: 'javascript',
};

export default class Create extends Component {
  state = {
    code: '',
  }

  updateCode = (newValue) => {
    this.setState({ code: newValue });
  }

  render() {
    return (
      <div className={style.container} >
        Create Page
        <CodeMirror value={this.state.code} onChange={this.updateCode} options={CodeMirrorOptions} />
      </div>
    );
  }
}
