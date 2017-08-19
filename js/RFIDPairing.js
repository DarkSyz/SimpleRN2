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
    componentWillReceiveProps(nextProps) {
        this.setState({
            RFIDTag: nextProps.RFIDTag
        })
    }
    onChangeText = (value) => {
        this.setState({
            RFIDTag: value
        })
    }
    render() {
        return (
            <View>
                <Text style={style.tip}>Please pull RDIF reader to scan the tag or tap Camera to scan the barcode</Text>
                <Text style={style.label}>RFID Tag</Text>
                <View style={[style.card, style.textInputWithIcon]}>
                    <TextInput style={style.textInput} placeholder='RFID Tag'
                        value={this.state.RFIDTag} onChangeText={this.onChangeText}
                    ></TextInput>
                    <TouchableHighlight underlayColor='lightgray'
                        onPress={() => Alert.alert('Camera Scanning')}>
                        <Image style={style.icon} source={require('../images/icons8-Camera-40.png')} />
                    </TouchableHighlight>
                </View>
                
            </View>
        );
    }
}

const Attribute = (props) =>
    <View style={style.cardRow}>
        <Text>{props.label}</Text>
        <Text>{props.value}</Text>
    </View>;

const Attributes = (props)=>
    <View>
        <Text style={style.label}>OS Attributes</Text>
        <View style={style.card}>
            <Attribute label='OS Tag' value={props.OSTag} />
            <Attribute label='Site' value={props.site} />
            <Attribute label='Department' value={props.department} />
            <Attribute label='Building' value={props.building} />
            <Attribute label='Floor' value={props.floor} />
            <Attribute label='Room' value={props.room} />
        </View>
    </View>;


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
    checkRFIDReader = ()=>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject({ code: -1, message: 'Not Found'});
            }, 500);
        })        
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: {}
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({ loading: true });
        this.mockFetch('').then((data) => {
            this.props.navigation.setParams({ loading: false });
            this.setState((prevState, props) => ({
                loading: false,
                data: data
            }))
        });
        this.checkRFIDReader().catch(err=>{
            Alert.alert('RFID Reader is unavailable, please ensure it has been connected.');
        });
    }
    render() {
        if (this.state.loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
        }
        else    
        {
            return (
                <View>
                    <RFIDTagInput RFIDTag={this.state.data.RFIDTag} />
                    <Attributes {...this.state.data} />
                </View>);
        }
    }
}