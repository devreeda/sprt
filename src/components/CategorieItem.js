import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const {width, height} = Dimensions.get('window')

export default class CategorieItem extends Component {
    render() {
        const {
            item,
        } = this.props
        const {
            main_container,
            text,
        } = styles
        return (
            <TouchableOpacity style={main_container}>
                <Text style={text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '15%',
        height: height*0.04,
        borderRadius: 6,
    },
    text: {
        paddingLeft: '3%',
        paddingRight: '3%',
    }
})