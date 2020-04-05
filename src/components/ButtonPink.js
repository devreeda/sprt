import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const {width, height} = Dimensions.get('window')

export default class ButtonPink extends Component {
    render() {
        const {
            button_container,
            button_text,
        } = styles
        const {
            text,
            navigate
        } = this.props
        return (
            <TouchableOpacity style={button_container} onPress={() => navigate()}>
                <Text style={button_text}>{text}</Text>
            </TouchableOpacity>
        );
  }
}

const styles = StyleSheet.create({
    button_container: {
        width: width*0.9,
        height: width*0.14,
        marginTop: height*0.05,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(250, 20, 100)',
        borderRadius: width*0.7
      },
      button_text: {
        color: 'white',
        fontSize: width*0.07,
        fontWeight: '500'
      },
})