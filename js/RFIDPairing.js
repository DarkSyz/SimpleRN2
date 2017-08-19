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
                <Image style={style.icon}
                    source={require('../images/icons8-Camera-40.png')} />
            </View>
        );
    }
}

const ListItem = (props) =>
    <View style={style.cardRow}>
        <Text>{props.label}</Text>
        <Text>{props.value}</Text>
    </View>

const List = (props) =>
    <View style={style.card}>
        {
            props.items.map((item, index) =>
                <ListItem key={item.key} {...item} />
            )
        }
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
        this.mockFetch('').then((data) => {
            this.props.navigation.setParams({ loading: false });
            this.setState((prevState, props) => ({
                loading: false,
                RFIDTag: data.RFIDTag,
                items:
                [
                    { key: 'OSTag', label: 'OS Tag', value: data.OSTag },
                    { key: 'site', label: 'Site', value: data.site },
                    { key: 'dept', label: 'Department', value: data.department },
                    { key: 'building', label: 'Building', value: data.building },
                    { key: 'floor', label: 'Floor', value: data.floor },
                    { key: 'room', label: 'Room', value: data.room },
                ]
            }))
        })
    }
    componentDidMount() {
        this.props.navigation.setParams({
            loading: this.state.loading
        });
    }
    render() {
        if (this.state.loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
        }
        else {
            return (
            <View>
                <Text style={style.label}>RFID Tag</Text>
                <RFIDTagInput RFIDTag={this.state.RFIDTag} />

                <Text style={style.label}>OS Attributes</Text>
                <List items={this.state.items} />
            </View>);
        }
    }
}