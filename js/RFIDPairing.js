import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import style from './style';
import {
    CardComponent as Card,
    AttributesComponent as Attributes,
    TextInputComponent
} from './common';
import Service from './services';

const RFIDTagInput = (props) =>
    <View style={style.textInputWithIcon}>
        <TextInputComponent style={style.textInput} placeholder='Please scan the RFID Tag'
            value={props.RFIDTag} onChangeText={v => props.updateRFIDTag(v)} />
        <TouchableOpacity style={style.icon} onPress={() => Alert.alert('Camera Scanning')}>
            <Image source={require('../images/icons8-Camera-40.png')} />
        </TouchableOpacity>
    </View>;

export default class PairingScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return ({
            title: 'RDIF Pairing',
            headerRight: <Button title='Save'
                disabled={navigation.state.params === undefined || navigation.state.params.loading}
                onPress={() => {
                    navigation.state.params.onSave();
                    navigation.goBack()} 
                }/>
        })
    };
    constructor(props) {
        super(props);
        this.data={}
        this.state = {
            loading: true,
            RFIDStatus: 'checking',
            RFIDTag: ''
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({ loading: true, onSave:this.onSave });
        Service.fetchInstrument('E0000001').then((data) => {
            this.data = data;
            this.props.navigation.setParams({ loading: false });
            this.setState((prevState, props) => ({
                loading: false,
                RFIDTag: data.RFIDTag
            }))
        });
        Service.checkRFIDReader()
            .then(() => {
                this.setState({ RFIDStatus: 'ready' });
            })
            .catch(err => {
                this.setState({ RFIDStatus: 'error' });
            });
    }
    updateRFIDTag = v => this.setState({ RFIDTag: v });
    onSave = ()=>{
        Alert.alert(`RFID Tag is ${this.state.RFIDTag}`);
    }
    render() {
        if (this.state.loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
        }
        else {
            let data = this.data;
            let attributes = [
                { label: 'OS Tag', value: data.OSTag },
                { label: 'Site', value: data.site },
                { label: 'Department', value: data.department },
                { label: 'Building', value: data.building },
                { label: 'Floor', value: data.floor },
                { label: 'Room', value: data.room },
            ];

            let tip;
            switch (this.state.RFIDStatus) {
                case 'checking':
                    tip = <Text style={style.tip}>Checking RFID reader...</Text>;
                    break;
                case 'ready':
                    tip = <Text style={style.tip}>Please pull RDIF reader to scan the tag or tap Camera to scan the tag</Text>;
                    break;
                case 'error':
                    tip = <Text style={[style.tip, { color: 'red' }]}>RFID reader is not connected, please connect it at first. Or use Camera to scan instead.</Text>;
                    break;
            }

            return (
                <View>
                    {tip}

                    <Card title='RDIF Tag' backgroundColor='white'>
                        <RFIDTagInput RFIDTag={this.state.RFIDTag} updateRFIDTag={v=>this.updateRFIDTag(v)}/>
                    </Card>

                    <Card title='OS Attributes'>
                        <Attributes items={attributes} />
                    </Card>
                </View>);
        }
    }
}