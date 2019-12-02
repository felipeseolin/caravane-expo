import { SET_FIELD, RESET_FORM, CARAVANA_SAVED_SUCCESS, SET_ALL_FIELDS } from '../actions';

const INITIAL_STATE = {
  title: '',
  description: '',
  fromPlace: '',
  toPlace: '',
  exitDate: '',
  arriveDate: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD:
      const clonedState = { ...state };
      clonedState[action.field] = action.value;
      return clonedState;
    case RESET_FORM:
      return INITIAL_STATE;
    case CARAVANA_SAVED_SUCCESS:
      return INITIAL_STATE;
    case SET_ALL_FIELDS:
      return action.caravana;
    default:
      return state;
  }
}
