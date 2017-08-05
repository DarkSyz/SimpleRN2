import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, TextInput, View, TouchableHighlight, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import store from './store.js';

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        padding: 40, paddingTop: 0,
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    textInput: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgray',
        backgroundColor: 'white',
        fontSize: 14
    },
    loginButton: {
        marginTop: 12,
        marginBottom: 12,
        padding: 10,
        backgroundColor: '#0000CC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonText: {
        color: 'white',
    },
    bgImage: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'flex-end',
        resizeMode: 'contain'
    },
});

export default class LoginScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
    });
    constructor(props) {
        super(props);

        this.state = {
            username: 'darksys@example.com',
            password: ''
        };
    }

    render() {
        return (
            <Image source={require('../images/login_background.png')} style={styles.bgImage}>
                <View style={{ flex: 1, padding: 40, paddingBottom: 0 }}>
                    <Image source={require('../images/onesource_logo.png')}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }} />
                </View>
                <View style={styles.topContainer}>
                    <View style={{ height: 80 }}>
                        <TextInput style={styles.textInput} placeholder={'Email'}
                            keyboardType='email-address' clearButtonMode={'always'}
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username} />
                        <TextInput style={styles.textInput} placeholder={'Password'}
                            password clearButtonMode={'always'} />
                    </View>
                    <TouchableHighlight underlayColor={'darkblue'} style={styles.loginButton}
                        onPress={
                            () => {
                                store.setUsername(this.state.username);
                                this.props.navigation.dispatch(NavigationActions.reset({
                                    index: 0,
                                    actions: [
                                        NavigationActions.navigate({ routeName: 'Main' })
                                    ]
                                }));
                            }
                        }>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableHighlight>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, color: 'gray', fontSize: 12 }}>
                            FAQ
                    </Text>
                        <Text style={{ justifyContent: 'flex-end', color: 'gray', fontSize: 12 }}
                            onPress={() => Alert.alert('', 'Forgot Password Pressed',
                                [
                                    { text: 'OK', onPress: () => console.log('OK') },
                                    { text: 'Cancel', onPress: () => console.log('Cancel') }
                                ])}>
                            Forgot Password
                    </Text>
                    </View>
                </View>
                <View style={{ flex: 1, padding: 5, flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Image source={require('../images/perkinelmer_logo.png')}
                        style={{ width: 100, height: 50, resizeMode: 'contain' }} />
                </View>
            </Image>
        );
    }
}
