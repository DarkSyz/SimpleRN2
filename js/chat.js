import React, { Component } from 'react';
import { Text, Image, Button, View, ListView } from 'react-native';
import { Message, CustomView } from './native';
import store from './store';

export default class ChatScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ marginTop: 16 }}>Native Module Sample - replace 'Goodbye' to 'Hello':</Text>
                <Message text={'Goodbye, ' + store.getUsername()} />
                <Text style={{ marginTop: 16 }}>Native View Sample:</Text>
                <CustomView style={{ flex: 1 }} text={'Linda'}
                    startColor={0xFF0000FF} endColor={0x00FF00FF} />
            </View>
        );
    }
}