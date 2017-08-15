/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Alert } from 'react-native';
import App from './js/app';

import ErrorUtils from "ErrorUtils";
(async function initUncaughtErrorHandler() {
    const defaultGlobalHandler = ErrorUtils.getGlobalHandler();
 
    ErrorUtils.setGlobalHandler(async(error, isFatal) => {
        try {
            if (!__DEV__) {
                Alert.alert(error.message);
            }
        }
        catch (error) {
            Alert.alert(error.message);
        }
 
        if (__DEV__ && defaultGlobalHandler) {
            defaultGlobalHandler(error, isFatal);
        }
    });
})();

export default class SimpleRN2 extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('SimpleRN2', () => SimpleRN2);
