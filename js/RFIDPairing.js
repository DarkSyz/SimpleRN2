import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    TextInput,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import style from './style';
import { CardComponent as Card } from './common';
import Service from './services';

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
            <Card title='RFID Tag' backgroundColor='white'>
                <View style={style.textInputWithIcon}>
                    <TextInput style={style.textInput} placeholder='RFID Tag' underlineColorAndroid='transparent'
                        value={this.state.RFIDTag} onChangeText={this.onChangeText}
                    ></TextInput>
                    {
                    <TouchableOpacity style={style.icon}
                        onPress={() => Alert.alert('Camera Scanning')}>
                        <Image source={require('../images/icons8-Camera-40.png')} />
                    </TouchableOpacity>
                    }
                </View>
            </Card>
        );
    }
}

const Attribute = (props) =>
    <View style={style.cardRow}>
        <Text>{props.label}</Text>
        <Text>{props.value}</Text>
    </View>;

const Attributes = (props) =>
    <View>
        <Card title='OS Attributes'>
            <Attribute label='OS Tag' value={props.OSTag} />
            <Attribute label='Site' value={props.site} />
            <Attribute label='Department' value={props.department} />
            <Attribute label='Building' value={props.building} />
            <Attribute label='Floor' value={props.floor} />
            <Attribute label='Room' value={props.room} />
        </Card>
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
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            RFIDStatus: 'checking',
            data: {}
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({ loading: true });
        Service.fetchInstrument('E0000001').then((data) => {
            this.props.navigation.setParams({ loading: false });
            this.setState((prevState, props) => ({
                loading: false,
                data: data
            }))
        });
        Service.checkRFIDReader()
            .then(()=>{
                this.setState({RFIDStatus: 'ready'});
            })
            .catch(err => {
                this.setState({RFIDStatus: 'error'});
            });
    }
    render() {
        if (this.state.loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
        }
        else {
            let tip;
            switch ( this.state.RFIDStatus ){
            case 'checking':
                tip = <Text style={style.tip}>Checking RFID reader...</Text>;              
                break;
            case 'ready':
                tip = <Text style={style.tip}>Please pull RDIF reader to scan the tag or tap Camera to scan the tag</Text>;
                break;
            case 'error':
                tip = <Text style={[style.tip, {color: 'red'}]}>RFID reader is not connected, please connect it at first. Or use Camera to scan instead.</Text>;
                break;
            }
            return (
                <View>
                    {tip}

                    <RFIDTagInput RFIDTag={this.state.data.RFIDTag} />
                    <Attributes {...this.state.data} />
                </View>);
        }
    }
}