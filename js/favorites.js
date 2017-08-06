import React, { Component } from 'react';
import { Text, Image, Button, View, ListView } from 'react-native';
import store from './store';

export default class FavoritesScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Favorites',
            headerRight: <Button title='Search' onPress={() =>
                navigation.navigate('Search', {})
            } />,
            tabBarIcon: ({ tintColor }) =>
                <Image style={{ height: 24, width: 24, tintColor: tintColor }} source={require('../images/ic_favorite.png')} />
        }
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(store.getFavorites()),
        };
    }

    render() {
        return (
            <ListView style={{ flex: 1 }} visible={this.state.dataSource.length > 0}
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                    <View key={rowData.key} flexDirection='row' alignItems='center' style={{ height: 40 }}>
                        <Image style={{ height: 24, width: 24 }} source={require('../images/ic_launcher.png')} />
                        <View style={{ padding: 4, flex: 1 }} flexDirection='column'>
                            <Text numberOfLines={1} style={{ fontSize: 16 }}>{rowData.modelName}</Text>
                            <Text numberOfLines={1} style={{ fontSize: 10 }}>{rowData.vendorName}</Text>
                        </View>
                    </View>
                }
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={{height:1}} />}
            />
        );
    }
}