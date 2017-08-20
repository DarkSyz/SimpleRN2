import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import store from './store';
import { TextInputComponent } from './common';

class SearchScreenHeader extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <TextInputComponent placeholder={'Search'} style={{ flex: 1, margin: 4 }} />
                <Button title='Cancel' onPress={() => {
                    this.props.navigation.goBack();
                }} />
            </View>
        );
    }
}

export default class SearchScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
        tabBarVisible: false
    });
    render() {
        return (
        <View style={{marginTop: 22}}>
            <SearchScreenHeader navigation={this.props.navigation} />
            <Text>Search, username is {store.getUsername()}</Text>
        </View>
        );
    }
};
