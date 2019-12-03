import { combineReducers } from 'redux';

import userReducer from './userReducer';
import caravanaFormReducer from './caravanaFormReducer';
import myCaravanasReducer from './myCaravanasReducer';
import allCaravanasReducer from './allCaravanasReducer';
import caravanaTripReducer from './caravanaTripReducer';
import tripsReducer from './tripsReducer';

export default combineReducers({
  user: userReducer,
  caravanaForm: caravanaFormReducer,
  listMyCaravanas: myCaravanasReducer,
  listAllCaravanas: allCaravanasReducer,
  tripForm: caravanaTripReducer,
  listMyTrips: tripsReducer,
});
