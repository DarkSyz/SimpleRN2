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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{props.value}</Text>
                <Image style={style.smallIcon} source={require('../images/icons8-Forward-48.png')} />
            </View>
        </View>
    </TouchableHighlight>

const CircleButton = (props) =>
    <TouchableHighlight style={style.circleButton} underlayColor='#49a9ee'
        onPress={() => props.onPress()}>
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
            site: {},
            department: {},
            building: {},
            floor: {},
            room: {},
        }
    }
    mockFetchSites = () => {
        let data = [
            { id: '1', name: 'BOSTON' },
            { id: '2', name: 'DEMO1' },
            { id: '3', name: 'DEMO2' },
        ];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000);
        })
    }
    selectSite(curr) {
        this.props.navigation.navigate('Chooser',
            {
                title: 'Sites',
                showDone: false,
                fetch: this.mockFetchSites,
                callback: v => this.setState({ site: v })
            })
    }
    mockFetchBuilding = () => {
        let data = [ 'B1', 'B2', 'B3', 'B4' ];
        data = data.map((e)=>({
            id: e, name: e
        }));
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 1000);
        })
    }
    selectBuilding(curr) {
        this.props.navigation.navigate('Chooser',
            {
                title: 'Buildings',
                showDone: true,
                fetch: this.mockFetchBuilding,
                callback: v => this.setState({ building: v })
            })
    }        
    render() {
        return (
            <View>
                <Text style={style.label}>Environment</Text>
                <View style={style.card}>
                    <ListItem label='Site' value={this.state.site.name} 
                        onPress={() => this.selectSite(this.state.site)} />
                    <ListItem label='Department' value={this.state.department.name} />
                    <ListItem label='Building' value={this.state.building.name} 
                        onPress={() => this.selectBuilding(this.state.building)} />
                    <ListItem label='Floor' value={this.state.floor.name} />
                    <ListItem label='Room' value={this.state.room.name} />
                </View>

                <View style={style.circleButtonContainer}>
                    <CircleButton title='Start' onPress={() => Alert.alert('Start')} />
                </View>
            </View>);
    }
}