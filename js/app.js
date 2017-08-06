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

import LoginScreen from './login';
import FavoritesScreen from './favorites';
import SearchScreen from './search';
import SettingsScreen from './settings';
import store from './store';

if ( __DEV__ === false ){
    ErrorUtils =  require('ErrorUtils');
    ErrorUtils.setGlobalHandler((error, isFatal)=>{
        Alert.alert('Crash!', JSON.stringify(error));
    });
}

const FollowedScreen = (props) =>
    <Text>Followed</Text>;
const ChatScreen = (props) =>
    <Text>Chat</Text>;

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
            style: { backgroundColor: '#E0E0E0'},
        }
    }
);

export default App = StackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Search: {
        screen: SearchScreen,
    },
    Main: {
        screen: MainScreenNavigator,
    },
});
