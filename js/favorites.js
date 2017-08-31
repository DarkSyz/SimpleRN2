import React, { Component } from 'react';
import { Text, Image, Button, View, FlatList } from 'react-native';
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
        this.state = {
            dataSource: store.getFavorites(),
        };
    }

    render() {
        return (
            <FlatList style={{ flex: 1 }} visible={this.state.dataSource.length > 0}
                data={this.state.dataSource}
                renderItem={(e) =>
                    <View key={e.item.id} flexDirection='row' alignItems='center' style={{ height: 40 }}>
                    <Image style={{ height: 24, width: 24 }} source={require('../images/ic_launcher.png')} />
                    <View style={{ padding: 4, flex: 1 }} flexDirection='column'>
                        <Text numberOfLines={1} style={{ fontSize: 16 }}>{e.item.modelName}</Text>
                        <Text numberOfLines={1} style={{ fontSize: 10 }}>{e.item.vendorName}</Text>
                    </View>
                </View>
                    
                }
                ItemSeparatorComponent={() => <View style={{ borderColor: 'lightgray', borderWidth: 1 }}></View>}
                keyExtractor={(item, index) => index}
            />
        );
    }
}