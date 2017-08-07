import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NativeModules, requireNativeComponent, View, Text } from 'react-native';

export class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {text: this.props.text};
    }
    componentDidMount() {
        NativeModules.MyCustomModule.processString(
            this.state.text,
            (text) => {this.setState({ text })}
        );
        /*
        NativeModules.MyCustomModule.processStringWithPromise(this.state.text)
            .then(
                (text) => this.setState({ text })
            );*/
    }
    render = () => {
        return (
            <View>
                <Text>{this.state.text}</Text>
            </View>
        );
    }
}

export const CustomView = requireNativeComponent(
    'MyCustomView', // registered native view name
    {
        name: 'CustomView', // RN view name
        propTypes: {
            text: PropTypes.string,
            startColor: PropTypes.number,
            endColor: PropTypes.number,
            ...View.propTypes,      // default props
        }
    }
);
