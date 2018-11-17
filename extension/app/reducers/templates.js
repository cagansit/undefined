import * as ActionTypes from '../constants/ActionTypes';

const initialState = [
  {
    searchFilter: ''
  }
];

const actionsMap = {
  [ActionTypes.SET_SEARCH_FILTER](state, action) {
    return state.filter(templates => (templates.searchFilter = action.text));
  }
};

export default function templates(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
