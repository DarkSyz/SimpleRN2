import React, { Component } from 'react';
import { Button, Text, TouchableOpacity, ActivityIndicator, View, FlatList } from 'react-native';
import style from './style';
import { TextInputComponent } from './common';

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
        this.items=[];
        this.state = {
            loading: true,
            search: ''
        }
    }
    componentDidMount() {

        this.props.navigation.setParams({ onDonePress: this.onDonePress });
        this.props.navigation.state.params.fetch().then((items) => {
            this.items = items;
            this.setState({
                loading: false
            })
        })
    }
    onDonePress = () => {
        let item = { id: '-1', name: this.state.search }
        let nav = this.props.navigation;
        nav.state.params.callback(item);
        nav.goBack();
    }
    onItemPress = (item) => {
        let nav = this.props.navigation;
        nav.state.params.callback(item);
        nav.goBack();
    }
    render() {
        if (this.state.loading) {
            return <ActivityIndicator style={{ flex: 1 }} />
        } else {
            let items = this.items;
            if ( this.state.search !== '' ) {
                items = items.filter((item) => (item.name.toUpperCase().indexOf(this.state.search.toUpperCase()) !== -1));
            }
            return (
                <View style={{ flex: 1 }}>
                    <TextInputComponent placeholder='Search' keyboardType='web-search'
                        onChangeText={(v) => this.setState({ search: v })} value={this.state.search}
                        style={{ padding: 8, backgroundColor: 'white' }} />
                    <FlatList style={{ flex: 1 }}
                        data={items}
                        renderItem={e =>
                            <TouchableOpacity style={{ justifyContent: 'center', height: 32, margin: 4 }}
                                onPress={() => this.onItemPress(e.item)}>
                                <Text>{e.item.name}</Text>
                            </TouchableOpacity>
                        }
                        ItemSeparatorComponent={() => <View style={{ borderColor: 'lightgray', borderWidth: 1 }}></View>}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            );
        }
    }
}