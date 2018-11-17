import { fromJS } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes';

const initialState = fromJS({
  searchFilter: '',
  items: [
    {
      name: 'Hamburger Menu',
      selected: false
    },
    {
      name: 'Notification Center',
      selected: false
    },
    {
      name: 'Side Menu',
      selected: false
    },
    {
      name: '3D Recommendation',
      selected: false
    }
  ],
  currentPage: 'list'
});

export default function templates(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_FILTER:
      return state.set('searchFilter', action.text);
    case ActionTypes.SET_PAGE:
      return state.set('currentPage', action.page);
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
    default:
      return state;
  }
}
