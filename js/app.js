/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    TextInput,
    Image,
    Style
} from 'react-native';
import {
    TabNavigator,
    StackNavigator,
    NavigationActions
} from 'react-navigation';
import LoginScreen from './login';
import store from './store';

class FavoritesScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Favorites',
            headerRight: <Button title='Search' onPress={() =>
                navigation.navigate('Search', {})
            } />,
            tabBarLabel: 'Favorites',
            tabBarIcon: ({tintColor})=>
                <Image style={{height: 24, width: 24, tintColor: tintColor}} source={require('../images/ic_favorite.png')} />
        }
    };

    render() {
        return (
            <Text>Favorites of {store.getUsername()}</Text>
        );
    }
}

const FollowedScreen = (props) =>
    <Text>Followed</Text>;
const ReservationScreen = (props) =>
    <Text>Reservation</Text>;
const ChatScreen = (props) =>
    <Text>Chat</Text>;
const SettingsScreen = (props) =>
    <View>
        <Button color={'red'} title='Logout' onPress={() =>
            props.navigation.navigate('Login', {})
        } />
    </View>;

class SearchScreenHeader extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row', marginTop: 22, backgroundColor: 'white',
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
class SearchScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <SearchScreenHeader navigation={navigation} />,
    });
    render() {
        return <Text>Search</Text>;
    }
}

const MainScreenNavigator = TabNavigator({
    Favorites: { screen: FavoritesScreen },
    Followed: { screen: FollowedScreen },
    Reservation: { screen: ReservationScreen },
    Chat: { screen: ChatScreen },
    Settings: { screen: SettingsScreen },
});

export default App = new StackNavigator({
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
