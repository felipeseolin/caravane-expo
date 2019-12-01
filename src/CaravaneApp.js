import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers';
import Routes from './routes';
import './config/firebase';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: 25 }}>
      <StatusBar barStyle="dark-content" backgroundColor="blue" translucent/>
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  );
}
