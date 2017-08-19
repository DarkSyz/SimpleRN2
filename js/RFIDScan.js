import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Button,
    TextInput,
    Image,
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import style from './style';

const ListItem = (props) =>
    <TouchableHighlight underlayColor='lightgray' onPress={props.onPress}>
        <View style={style.cardRow}>
            <Text>{props.label}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Text>{props.value}</Text>
                <Image style={style.smallIcon} source={require('../images/icons8-Forward-48.png')} />
            </View>
        </View>
    </TouchableHighlight>

const List = (props) =>
    <View style={style.card}>
        {
            props.items.map((item, index) =>
                <ListItem key={item.key} {...item} />
            )
        }
    </View>

const CircleButton = (props) =>
        <TouchableHighlight style={style.circleButton} underlayColor='#49a9ee'
            onPress={()=>props.onPress()}>
            <Text style={{ alignSelf: 'center' }}>{props.title}</Text>
        </TouchableHighlight>

export default class RFIDScanScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'RFID Scan',
        headerRight: <Button title='History' onPress={() => Alert.alert('Goto History')/*navigation.navigate()*/} />
    });

    constructor(props) {
        super(props);
        this.state = {
            items: [
                { key: 'site', label: 'Site', value: 'Demo1', onPress:()=>props.navigation.navigate('Chooser', {title:'Sites'}) },
                { key: 'dept', label: 'Department', value: '' },
                { key: 'building', label: 'Building', value: '' },
                { key: 'floor', label: 'Floor', value: ' ' },
                { key: 'room', label: 'Room', value: '' },
            ]
        }
    }
    render() {
        return (
            <View>
                <Text style={style.label}>Environment</Text>
                <List items={this.state.items} />

                <View style={style.circleButtonContainer}>
                    <CircleButton title='Start' onPress={() => Alert.alert('Start')}/>
                </View>
            </View>);
    }
}