import { combineReducers } from 'redux';

import userReducer from './userReducer';
import caravanaFormReducer from './caravanaFormReducer';
import myCaravanasReducer from './myCaravanasReducer';

export default combineReducers({
  user: userReducer,
  caravanaForm: caravanaFormReducer,
  listMyCaravanas: myCaravanasReducer,
});
