import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

export default class HeaderToday extends Component {
    render() {
        const {
            main_container,
            title_text,
        } = styles
        return (
            <View style={main_container}>
                <Text style={title_text}>7M Women</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: height*0.095,
        paddingBottom: height*0.01,
        paddingLeft: height*0.02,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: 'rgb(255, 0, 110)',
        width: width
    },
    title_text: {
        fontSize: height*0.03,
        color: 'white',
        fontWeight: '700',
    }
})
