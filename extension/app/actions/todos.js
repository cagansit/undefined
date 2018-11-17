import * as types from '../constants/ActionTypes';

export function searchFilter(text) {
  return { type: types.SEARCH_FILTER, text };
}
