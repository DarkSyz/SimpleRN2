import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    SectionList
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default SettingsScreen = (props) =>
    <View>
        <Button color={'green'} title='Logout' onPress={
            () => {
                props.navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Login' })
                    ]
                }));
            }
        } />
        <Button color={'red'} title='RaiseError' onPress={() =>
            throws('Error!')
        } />
        <SectionList
        renderItem={({item}) => <Text style={{backgroundColor: 'white'}}>{item}</Text>}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        sections={[
          {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], title: 'A'},
          {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], title: 'B'},
          {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], title: 'C'},
          {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], title: 'D'},
          {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], title: 'E'},
          {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], title: 'F'},
          {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], title: 'G'},
          {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], title: 'H'},
          {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], title: 'I'},
          {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], title: 'J'},
        ]}
      />
      </View>;