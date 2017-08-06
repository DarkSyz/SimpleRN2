/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './js/app';

export default class SimpleRN2 extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('SimpleRN2', () => SimpleRN2);
