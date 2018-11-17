import { fromJS } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes';

const initialState = fromJS({
  searchFilter: '',
  currentPage: 'list',
});

export default function templates(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_FILTER:
      return state.set('searchFilter', action.text);
    case ActionTypes.SET_PAGE:
      return state.set('currentPage', action.page);
    default:
      return state;
  }
}

