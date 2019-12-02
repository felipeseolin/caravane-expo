import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers';
import Routes from './routes';
import './config/firebase';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}
