import React, { Component } from 'react';
import { Text, TextInput, Button, View } from 'react-native';

class SearchScreenHeader extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row', marginTop: 22, 
                backgroundColor: 'white',
                justifyContent: 'space-between'
            }}>
                <TextInput placeholder={'Search'} style={{ flex: 1, margin: 4, backgroundColor: 'lightgray' }} />
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
            <Text>Search</Text>
        </View>
        );
    }
};
