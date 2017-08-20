import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import style from './style';

export const TextInputComponent = (props)=>
    <TextInput underlineColorAndroid='transparent' 
        autoCapitalize='none' autoCorrect={false}
        {...props}/>;

export const CardComponent = (props) =>
    <View style={style.card}>
        {props.title && <Text style={style.cardLabel}>{props.title}</Text>}
        <View style={[style.cardContent, { backgroundColor: props.backgroundColor }]}>
            {props.children}
        </View>
    </View>

export const AttributeComponent = (props) =>
    <View style={style.cardRow}>
        <Text>{props.label}</Text>
        <Text>{props.value}</Text>
    </View>;

export const AttributesComponent = (props) =>
    <View>
        {props.items.map((item, index) =>
            <AttributeComponent key={index} {...item} />
        )}
    </View>;

export const ChangableAttributeComponent = (props) =>
    <TouchableOpacity onPress={props.onPress}>
        <View style={style.cardRow}>
            <Text>{props.label}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{props.value}</Text>
                <Image style={style.smallIcon} source={require('../images/icons8-Forward-48.png')} />
            </View>
        </View>
    </TouchableOpacity>

export const ChangableAttributesComponent = (props) =>
    <View>
        {props.items.map((item, index) =>
            <ChangableAttributeComponent key={index} {...item} />
        )}
    </View>;
