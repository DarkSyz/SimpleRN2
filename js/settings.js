import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    TextInput,
    Image
} from 'react-native';

export default SettingsScreen = (props) =>
    <View>
        <Button color={'green'} title='Logout' onPress={() =>
            props.navigation.navigate('Login', {})
        } />
        <Button color={'red'} title='RaiseError' onPress={() =>
            throws ('Error!')
        } />
    </View>;