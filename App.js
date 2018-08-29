/**
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation'
import ImageView from './src/ImageView'
import MainList from './src/MainList'
import store from './src/store/store';
import {Provider} from 'react-redux';

export default class App extends Component {
  render() {
  return (
    <Provider store={store}>
      <MainList />
    </Provider>
    );
  }
}
const RootStack = StackNavigator(
  {
    Main: MainList,
    browser:ImageView ,
  }
);