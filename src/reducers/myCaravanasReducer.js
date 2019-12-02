import { SET_MY_CARAVANAS } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case SET_MY_CARAVANAS:
      return action.caravanas;
    default:
      return state;
  }
}
