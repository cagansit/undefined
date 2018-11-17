import { fromJS } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes';

const initialState = fromJS({
  searchFilter: ''
});

export default function templates(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_FILTER:
      return state.set('searchFilter', action.text);
    default:
      return state;
  }
}

