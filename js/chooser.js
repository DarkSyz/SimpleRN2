import React, { Component } from 'react';
import { Text, Alert, TouchableHighlight, TextInput, View, FlatList } from 'react-native';
import style from './style';

export default class ChooserScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });

    constructor(props) {
        super(props);
        this.sites = [
            { key: 'BOSTON' },
            { key: 'DEMO1' },
            { key: 'DEMO2' },
            { key: 'DEMO3' },
            { key: 'DEMO4' },
            { key: 'DEMO5' },
            { key: 'DEMO6' },
            { key: 'DEMO7' },
        ];
        this.state = {
            dataSource: this.sites
        };
    }
    onChangeText(v) {
        let s = v === '' ? this.sites : this.sites.filter((e) => {
            return e.key.toUpperCase().indexOf(v.toUpperCase()) !== -1;
        })
        this.setState({
            dataSource: s,
        });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput placeholder='Search'
                    onChangeText={(v) => this.onChangeText(v)}
                    style={{ padding: 8, backgroundColor: 'white' }} />
                <FlatList style={{ flex: 1, marginTop: 8 }}
                    data={this.state.dataSource}
                    renderItem={e => {
                        return <View key={e.item.key} flexDirection='row' alignItems='center' style={{ height: 32, margin: 4 }}>
                            <Text>{e.item.key}</Text>
                        </View>
                    }
                    }
                />
            </View>
        );
    }
}