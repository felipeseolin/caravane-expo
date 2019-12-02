import { combineReducers } from 'redux';

import userReducer from './userReducer';
import caravanaFormReducer from './caravanaFormReducer';
import myCaravanasReducer from './myCaravanasReducer';
import allCaravanasReducer from './allCaravanasReducer';

export default combineReducers({
  user: userReducer,
  caravanaForm: caravanaFormReducer,
  listMyCaravanas: myCaravanasReducer,
  listAllCaravanas: allCaravanasReducer,
});
