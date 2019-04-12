import React from 'react';
import { Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Kwiz from './components/Kwiz';

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
  // return (<View><Text>yooo</Text></View>);
    return (
      <Provider store={store}>
        <Kwiz/>
      </Provider>
    );
  }
};