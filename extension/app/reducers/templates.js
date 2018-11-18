import { fromJS } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes';
import { SETTINGS_PAGE } from '../constants/PageTypes';
import * as VariableHandler from '../helpers/VariableHandler';

const initialState = fromJS({
  searchFilter: '',
  javascriptCode: '',
  cssCode: '',
  items: [],
  currentPage: 'list',
  templateName: '',
  selectedItemOptions: {},
  selectedPartner: '',
  selectedCampaign: '',
  partners: [],
  campaigns: []
});

export default function templates(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_FILTER:
      return state.set('searchFilter', action.text);
    case ActionTypes.SET_PAGE:
      return state.set('currentPage', action.page);
    case ActionTypes.SET_SELECTED: {
      let selectedItem;
      const newState = state
        .update('items', items =>
          items.map((item) => {
            const newItem = item;
            let selected = false;

            if (newItem.get('name') === action.selected) {
              selected = true;
              selectedItem = newItem;
            }

            return newItem.set('selected', selected);
          })
        )
        .update('selectedItemOptions', (selectedItemOptions) => {
          const variables = [
            ...VariableHandler.parseVariables(selectedItem.get('javascriptCode')),
            ...VariableHandler.parseVariables(selectedItem.get('cssCode'))
          ];

          const options = VariableHandler.getVariableObjects(variables);
          return fromJS(options);
        })
        .set('currentPage', SETTINGS_PAGE);

      return newState;
    }
    case ActionTypes.SET_LANGUAGE:
      return state.mergeDeep(fromJS(action.data));
    case ActionTypes.FETCH_TEMPLATES:
      return state.set('items', fromJS(action.data));
    case ActionTypes.SET_NEW_TEMPLATE_NAME:
      return state.set('templateName', action.name);
    case ActionTypes.CLEAR_INPUTS:
      return state.mergeDeep(fromJS({ javascriptCode: '', cssCode: '', templateName: '' }));
    case ActionTypes.SET_OPTIONS_VALUE:
      return state.update('selectedItemOptions', selectedItemOptions =>
        selectedItemOptions.map((options) => {
          if (options.get('name') === action.name) {
            return options.mergeDeep(fromJS({ value: action.value }));
          }
          return options;
        })
      );
    case ActionTypes.FETCH_PARTNERS:
      return state.set('partners', fromJS(action.data));
    case ActionTypes.FETCH_CAMPAIGNS:
      return state.set('campaigns', fromJS(action.data));
    case ActionTypes.SET_CAMPAIGN:
      return state.set('selectedCampaign', action.campaignId);
    case ActionTypes.SET_PARTNER:
      return state.set('selectedPartner', action.partnerName);
    default:
      return state;
  }
}
