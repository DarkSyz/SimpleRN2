import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Button,
    TextInput,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import style from './style';

class RFIDTagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RFIDTag: props.RFIDTag
        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            RFIDTag: props.RFIDTag
        })
    }
    onChangeText = (value) => {
        this.setState({
            RFIDTag: value
        })
    }
    render() {
        return (
            <View style={[style.card, style.textInputWithIcon]}>
                <TextInput style={style.textInput} placeholder='RFID Tag'
                    value={this.state.RFIDTag} onChangeText={this.onChangeText}
                ></TextInput>
                <TouchableHighlight underlayColor='lightgray'
                    onPress={() => Alert.alert('Camera Scanning')}>
                    <Image style={style.icon} source={require('../images/icons8-Camera-40.png')} />
                </TouchableHighlight>
            </View>
        );
    }
}

const ListItem = (props) =>
    <View style={style.cardRow}>
        <Text>{props.label}</Text>
        <Text>{props.value}</Text>
    </View>

export default class PairingScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return ({
            title: 'RDIF Pairing',
            headerRight: <Button title='Save'
                disabled={navigation.state.params === undefined || navigation.state.params.loading}
                onPress={() => navigation.goBack()} />
        })
    };

    mockFetch = (instrumentId) => {
        let data = {
            instrumentId: '1',
            RFIDTag: '00400',
            OSTag: '99960564',
            site: 'DEMO1',
            department: 'OS',
            building: 'B2',
            floor: '',
            room: '501'
        };
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    componentWillMount() {
        this.props.navigation.setParams({ loading: true });
        this.mockFetch('').then((data) => {
            this.props.navigation.setParams({ loading: false });
            this.setState((prevState, props) => ({
                loading: false,
                data: data
            }))
        })
    }
    render() {
        if (this.state.loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
        }
        else {
            let data = this.state.data;
            return (
                <View>
                    <Text style={style.label}>RFID Tag</Text>
                    <RFIDTagInput RFIDTag={data.RFIDTag} />

                    <Text style={style.label}>OS Attributes</Text>
                    <View style={style.card}>
                        <ListItem label='OS Tag' value={data.OSTag} />
                        <ListItem label='Site' value={data.site} />
                        <ListItem label='Department' value={data.department} />
                        <ListItem label='Building' value={data.building} />
                        <ListItem label='Floor' value={data.floor} />
                        <ListItem label='Room' value={data.room} />
                    </View>
                </View>);
        }
    }
}