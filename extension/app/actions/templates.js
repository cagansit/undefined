import * as types from '../constants/ActionTypes';

export function setSearchFilter(text) {
  return { type: types.SET_SEARCH_FILTER, text };
}

export function setPage(page) {
  return { type: types.SET_PAGE, page };
}
