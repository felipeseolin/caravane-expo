import {
  SET_FIELD_TRIP,
  RESET_FORM_TRIP,
  TRIP_SAVED_SUCCESS,
  SET_ALL_FIELDS_TRIP
} from '../actions';

const INITIAL_STATE = {
  passenger: '',
  cpf: '',
  birth: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD_TRIP:
      const clonedState = { ...state };
      clonedState[action.field] = action.value;
      return clonedState;
    case RESET_FORM_TRIP:
      return INITIAL_STATE;
    case TRIP_SAVED_SUCCESS:
      return INITIAL_STATE;
    case SET_ALL_FIELDS_TRIP:
      return action.trip;
    default:
      return state;
  }
}
