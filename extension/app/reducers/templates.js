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
  ]
});

export default function templates(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_FILTER:
      return state.set('searchFilter', action.text);
    default:
      return state;
  }
}
