import React, { Component } from 'react';
import { Text, Image, Button, View, FlatList } from 'react-native';
import store from './store';

export default class IndentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: store.getFavorites(),
    };
  }

  getItemNode(itemInfo) {
    let item = itemInfo.item;
    let locationNode = <Text numberOfLines={1} style={{ fontSize: 16 }}>{item.building} - {item.room}    {itemInfo.item.site}</Text>;
    let systemNode = <Text numberOfLines={1} style={{ fontSize: 16, paddingLeft: 24 }}>{item.system === '' ? 'Others' : itemInfo.item.system}</Text>;
    let itemNode = <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 8}}>
      <View>
        <Text numberOfLines={1} style={{ fontSize: 16, paddingLeft: 48, fontWeight: 'bold' }}>{item.OSTag}</Text>
        <Text numberOfLines={1} style={{ fontSize: 10, paddingLeft: 48 }}>{item.vendor} - {item.model}</Text>
      </View>
      <Image style={{ height: 24, width: 24 }} source={require('../images/ic_launcher.png')} />
    </View>;

    if (itemInfo.index > 0) {
      let previousItem = this.state.dataSource[itemInfo.index - 1];
      if (item.building === previousItem.building && item.room === previousItem.room) {
        locationNode = null;
        if (item.system === previousItem.system) {
          systemNode = null;
        }
      }
    }

    return (
      <View>
        {locationNode}
        {systemNode}
        {itemNode}
      </View>);
  }

  getSeparator() {
    return <View style={{ borderColor: 'lightgray', borderWidth: 1, marginLeft: 48 }}></View>
  }


  render() {
    return (
      <FlatList style={{ flex: 1 }} visible={this.state.dataSource.length > 0}
        data={this.state.dataSource}
        renderItem={(e) =>
          <View key={e.item.id} flexDirection='row' alignItems='center'>
            <View style={{ padding: 4, flex: 1 }} flexDirection='column'>
              {this.getItemNode(e)}
            </View>
          </View>

        }
        ItemSeparatorComponent={() => this.getSeparator()}
        keyExtractor={(item, index) => index}
      />
    );
  }
}