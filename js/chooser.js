import React, { Component } from 'react';
import { Button, Text, TouchableOpacity, ActivityIndicator, TextInput, View, FlatList } from 'react-native';
import style from './style';

export default class ChooserScreen extends Component {
    static navigationOptions = (props) => {
        let params = props.navigation.state.params;
        return {
        title: params.title,
        headerRight: params.showDone ? 
            <Button title='Done' onPress={() => params.onDonePress()} />        
            : null
        }
    };

    constructor(props) {
        super(props);
        this.fullItems = [];
        this.state = {
            loading: true,
            items: []
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({onDonePress: this.onDonePress});
        this.props.navigation.state.params.fetch().then((items) => {
            this.fullItems = items;
            this.setState({
                loading: false,
                search: '',
                items: items
            })
        })
    }
    onChangeText(v) {
        let items = v === '' ? this.fullItems : this.fullItems.filter((item) => {
            return item.name.toUpperCase().indexOf(v.toUpperCase()) !== -1;
        })
        this.setState({ 
            search: v,
            items: items 
        });
    }
    onDonePress = ()=>{
        let item = {id:'-1', name:this.state.search}
        let nav = this.props.navigation;
        nav.state.params.callback(item);
        nav.goBack();        
    }
    onItemPress = (item)=>{
        let nav = this.props.navigation;
        nav.state.params.callback(item);
        nav.goBack();
    }
    render() {
        if (this.state.loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
        }
        else {
            return (
                <View style={{ flex: 1 }}>
                    <TextInput placeholder='Search' keyboardType='web-search' underlineColorAndroid='transparent'
                        onChangeText={(v) => this.onChangeText(v)} value={this.state.search}
                        style={{ padding: 8, backgroundColor: 'white' }} />
                    <FlatList style={{ flex: 1}}
                        data={this.state.items}
                        renderItem={e =>
                            <TouchableOpacity style={{ justifyContent: 'center', height: 32, margin: 4 }}
                                onPress={()=>this.onItemPress(e.item)}>
                                <Text>{e.item.name}</Text>
                            </TouchableOpacity>
                        }
                        ItemSeparatorComponent={()=><View style={{borderColor:'lightgray', borderWidth: 1}}></View>}
                        keyExtractor={(item, index)=>index }
                    />
                </View>
            );
        }
    }
}