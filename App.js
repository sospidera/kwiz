import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import Kwiz from './src/components/Kwiz';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Kwiz/>
      </Provider>
    );
  }
};