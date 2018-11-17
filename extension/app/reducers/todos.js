import { fromJS } from 'immutable';
import { SEARCH_FILTER } from '../constants/ActionTypes';

const initialState = fromJS({
  isCreationMode: false,
  searhFilter: ''
});

/* eslint-disable new-cap */
function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FILTER:
      return state.set('searhFilter', action.text);
    default:
      return state;
  }
}

export default reducer;
