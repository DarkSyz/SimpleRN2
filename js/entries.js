import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

export default Entries = (props)=>
    <View style={{flex: 1, justifyContent:'space-around'}}>
        <Button onPress={()=>props.navigation.navigate('Login')} title='Login'/>

        <Button onPress={()=>props.navigation.navigate('Pairing')} title='Pairing'/>
        <Button onPress={()=>props.navigation.navigate('Scan')} title='RDIFScan'/>
    </View>;