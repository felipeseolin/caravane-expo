import { SET_ALL_CARAVANAS } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case SET_ALL_CARAVANAS:
      return action.caravanas;
    default:
      return state;
  }
}
