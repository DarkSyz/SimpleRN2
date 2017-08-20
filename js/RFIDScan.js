import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    TextInput,
    Image,
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import style from './style';
import { CardComponent as Card } from './common';
import Service from './services';

const ListItem = (props) =>
    <TouchableOpacity onPress={props.onPress}>
        <View style={style.cardRow}>
            <Text>{props.label}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{props.value}</Text>
                <Image style={style.smallIcon} source={require('../images/icons8-Forward-48.png')} />
            </View>
        </View>
    </TouchableOpacity>

const CircleButton = (props) =>
    <TouchableOpacity style={style.circleButton} underlayColor='#49a9ee'
        onPress={() => props.onPress()}>
        <Text style={{ alignSelf: 'center' }}>{props.title}</Text>
    </TouchableOpacity>

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
    selectSite(curr) {
        this.props.navigation.navigate('Chooser',
            {
                title: 'Sites',
                showDone: false,
                fetch: Service.fetchSites,
                callback: v => this.setState({ site: v })
            })
    }
    selectDepartment(curr) {
        this.props.navigation.navigate('Chooser',
            {
                title: 'Departments',
                showDone: false,
                fetch: Service.fetchDepartments,
                callback: v => this.setState({ department: v })
            })
    }
    selectBuilding(curr) {
        this.props.navigation.navigate('Chooser',
            {
                title: 'Buildings',
                showDone: false,
                fetch: Service.fetchBuildings,
                callback: v => this.setState({ building: v })
            })
    }
    selectFloor(curr) {
        this.props.navigation.navigate('Chooser',
            {
                title: 'Floor',
                showDone: false,
                fetch: Service.fetchFloors,
                callback: v => this.setState({ floor: v })
            })
    }
    selectRoom(curr) {
        this.props.navigation.navigate('Chooser',
            {
                title: 'Room',
                showDone: false,
                fetch: Service.fetchRooms,
                callback: v => this.setState({ room: v })
            })
    }
    start = () => {
        // TODO check environment
        Alert.alert('Start')
    }
    render() {
        return (
            <View>
                <Text style={style.tip}>Please set the scanning environment and start re-inventory</Text>

                <Card title='Environment'>
                    <ListItem label='Site' value={this.state.site.name}
                        onPress={() => this.selectSite(this.state.site)} />
                    <ListItem label='Department' value={this.state.department.name}
                        onPress={() => this.selectDepartment(this.state.site)} />
                    <ListItem label='Building' value={this.state.building.name}
                        onPress={() => this.selectBuilding(this.state.building)} />
                    <ListItem label='Floor' value={this.state.floor.name}
                        onPress={() => this.selectFloor(this.state.site)} />
                    <ListItem label='Room' value={this.state.room.name}
                        onPress={() => this.selectRoom(this.state.site)} />
                </Card>

                <View style={style.circleButtonContainer}>
                    <CircleButton title='Start'
                        onPress={() => this.start()} />
                </View>
            </View>);
    }
}