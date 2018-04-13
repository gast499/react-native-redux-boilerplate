import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import Home from './app/components/home';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Home/>
      </Provider>
    );
  }
}
