import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 40, alignSelf: 'center' }}>{this.props.main}</Text>
                <Text style={{ alignSelf: 'center', fontSize: 20}}>{this.props.description}</Text>
                <Text style={{ fontSize: 40, alignSelf: 'center' }}>{this.props.temp}</Text>
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>°C</Text>
            </View>
        );
    }
}

