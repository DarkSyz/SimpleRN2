/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, Alert } from 'react-native';
import {
    TabNavigator,
    StackNavigator,
    NavigationActions
} from 'react-navigation';

import EntriesScreen from './entries';
import LoginScreen from './login';
import FavoritesScreen from './favorites';
import SearchScreen from './search';
import ChatScreen from './chat';
import SettingsScreen from './settings';
import PairingScreen from './RFIDPairing';
import RFIDScanScreen from './RFIDScan';
import IndentListScreen from './indentList';
import ChooserScreen from './chooser';
import store from './store';

if (!__DEV__) {
    ErrorUtils = require('ErrorUtils');
    ErrorUtils.setGlobalHandler((error, isFatal) => {
        Alert.alert('Crash!', JSON.stringify(error));
    });
}

const FollowedScreen = (props) =>
    <Text>Followed</Text>;

const MainScreenNavigator = TabNavigator({
    Favorites: { screen: FavoritesScreen },
    Followed: { screen: FollowedScreen },
    Chat: { screen: ChatScreen },
    Settings: { screen: SettingsScreen },
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            upperCaseLabel: false,
            activeTintColor: '#108EE9',
            inactiveTintColor: 'gray',
            style: { backgroundColor: '#E0E0E0' },
        }
    }
);

export default App = StackNavigator({
    Entries: {
        screen: EntriesScreen,
    },
    Login: {
        screen: LoginScreen,
    },
    Search: {
        screen: SearchScreen,
    },
    Pairing: {
        screen: PairingScreen,
    },
    Scan: {
        screen: RFIDScanScreen,
    }, 
    IndentList: {
      screen: IndentListScreen,
  }, 
  Chooser : {
        screen: ChooserScreen,
    },
    Main: {
        screen: MainScreenNavigator,
    },
}, {
    initialRouteName: 'Entries'
});
