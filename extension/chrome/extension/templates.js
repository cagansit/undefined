import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './templates.css';
import { fromJS, isImmutable } from 'immutable';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  let initialState = JSON.parse(state || '{}');
  if (!isImmutable(state)) {
    initialState = fromJS(state);
  }
  const createStore = require('../../app/store/configureStore');

  ReactDOM.render(
    <Root store={createStore(initialState)} />,
    document.querySelector('#root')
  );
});
