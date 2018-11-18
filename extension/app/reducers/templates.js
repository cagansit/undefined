import { fromJS } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes';
import { LIST_PAGE } from '../constants/PageTypes';

const initialState = fromJS({
  searchFilter: '',
  javascriptCode: '',
  cssCode: '',
  items: [],
  currentPage: 'list',
  templateName: '',
});

export default function templates(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_FILTER:
      return state.set('searchFilter', action.text);
    case ActionTypes.SET_PAGE:
      return state
        .set('currentPage', action.page);
    case ActionTypes.SET_SELECTED:
      return state.update('items', items =>
        items.map((item) => {
          const newItem = item;
          let selected = false;

          if (newItem.get('name') === action.selected) {
            selected = true;
          }

          return newItem.set('selected', selected);
        })
      );
    case ActionTypes.SET_LANGUAGE:
      return state.mergeDeep(fromJS(action.data));
    case ActionTypes.FETCH_TEMPLATES:
      return state.mergeDeep(fromJS({ items: action.data }));
    case ActionTypes.SET_NEW_TEMPLATE_NAME:
      return state.set('templateName', action.name);
    case ActionTypes.CLEAR_INPUTS:
      return state.mergeDeep(fromJS({ javascriptCode: '', cssCode: '', templateName: '' }));
    default:
      return state;
  }
}
