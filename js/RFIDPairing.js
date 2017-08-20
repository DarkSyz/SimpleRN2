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
import { CardComponent as Card, AttributesComponent as Attributes } from './common';
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
            <View style={style.textInputWithIcon}>
                <TextInput style={style.textInput} placeholder='RFID Tag' underlineColorAndroid='transparent'
                    value={this.state.RFIDTag} onChangeText={this.onChangeText}>
                </TextInput>
                <TouchableOpacity style={style.icon} onPress={() => Alert.alert('Camera Scanning')}>
                    <Image source={require('../images/icons8-Camera-40.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

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
            let data = this.state.data;
            let attributes = [
                {label: 'OS Tag', value: data.OSTag},
                {label: 'Site', value: data.site},
                {label: 'Department', value: data.department},
                {label: 'Building', value: data.building},
                {label: 'Floor', value: data.floor},
                {label: 'Room', value: data.room},
            ];

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

                    <Card title='RFID Tag' backgroundColor='white'>
                        <RFIDTagInput RFIDTag={data.RFIDTag} />
                    </Card>

                    <Card title='OS Attributes'>
                        <Attributes items={attributes} />
                    </Card>
                </View>);
        }
    }
}