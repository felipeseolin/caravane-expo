import { SET_MY_TRIPS } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case SET_MY_TRIPS:
      return action.caravanas;
    default:
      return state;
  }
}
