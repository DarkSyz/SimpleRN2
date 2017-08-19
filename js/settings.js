import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default SettingsScreen = (props) =>
    <View>
        <Button color={'green'} title='Logout' onPress={
            () => {
                props.navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Login' })
                    ]
                }));
            }
        } />
        <Button color={'red'} title='RaiseError' onPress={() =>
            throws('Error!')
        } />
    </View>;