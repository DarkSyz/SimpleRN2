import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './style';

export const CardComponent = (props)=>
<View style={style.card}>
    { props.title && <Text style={style.cardLabel}>{props.title}</Text> }
    <View style={[style.cardContent, {backgroundColor: props.backgroundColor}]}>
       {props.children}
    </View>
</View>