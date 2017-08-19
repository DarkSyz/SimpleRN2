import React, { Component } from 'react';
import { Text, Alert, Button, TextInput, View, ListView } from 'react-native';
import style from './style';

export default class ChooserScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });

    constructor(props) {
        super(props);
        this.sites = [
                'BOSTON', 'DEMO1', 'DEMO2', 'DEMO3', 'DEMO4', 'DEMO5', 'DEMO6'
            ];
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: this.ds.cloneWithRows(this.sites),
        };
    }
    onChangeText(v){
        let s = v === '' ? this.sites : this.sites.filter((e)=>{
            return e.toUpperCase().indexOf(v.toUpperCase()) !== -1;
        })
        this.setState ({
            dataSource: this.ds.cloneWithRows(s),
        });   
    }
    render() {
        return (
            <View style={{ flex: 1}}>
                <TextInput placeholder='Search' 
                    onChangeText={(v)=>this.onChangeText(v)}
                    style={{ padding: 8, backgroundColor: 'white'}}/>
                <ListView style={{ flex: 1, marginTop: 8 }} visible={this.state.dataSource.length > 0}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <View key={rowData} flexDirection='row' alignItems='center' style={{ height: 32, margin: 4 }}>
                            <Text>{rowData}</Text>
                        </View>
                    }
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={{ height: 1 }} 
                    onSl
                    />}
                />
            </View>
        );
    }
}