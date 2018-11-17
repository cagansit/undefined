import { fromJS } from 'immutable';
import {

} from '../constants/ActionTypes';

const initialState = fromJS({
  isCreationMode: false,
});


/* eslint-disable new-cap */
function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
