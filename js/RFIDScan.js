import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Image,
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import style from './style';
import { CardComponent as Card, ChangableAttributesComponent as ChangableAttributes } from './common';
import Service from './services';

const CircleButton = (props) =>
    <TouchableOpacity style={style.circleButton} underlayColor='#49a9ee' onPress={() => props.onPress()}>
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
        let data = this.state;
        let items = [
            { label: 'Site', value: data.site.name, onPress: () => this.selectSite(this.state.site) },
            { label: 'Department', value: data.department.name, onPress: () => this.selectDepartment(this.state.department) },
            { label: 'Building', value: data.building.name, onPress: () => this.selectBuilding(this.state.building) },
            { label: 'Floor', value: data.floor.name, onPress: () => this.selectFloor(this.state.floor) },
            { label: 'Room', value: data.room.name, onPress: () => this.selectRoom(this.state.room) },
        ];

        return (
            <View>
                <Text style={style.tip}>Please set the scanning environment and start re-inventory</Text>

                <Card title='Environment'>
                    <ChangableAttributes items={items} />
                </Card>

                <View style={style.circleButtonContainer}>
                    <CircleButton title='Start' onPress={() => this.start()} />
                </View>
            </View>);
    }
}