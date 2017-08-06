import React, { Component } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import store from './store';
class SearchScreenHeader extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <TextInput placeholder={'Search'} style={{ flex: 1, margin: 4 }} />
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
    });
    render() {
        return (
        <View>
            <SearchScreenHeader navigation={this.props.navigation} />
            <Text>Search, username is {store.getUsername()}</Text>
        </View>
        );
    }
};
