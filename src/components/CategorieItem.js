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
        console.log(this.props.id)
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
        height: height*0.04,
        borderRadius: 6,
        minWidth: width*0.13,
    },
    text: {
        marginRight: width*0.02,
        marginLeft: width*0.02,        
    }
})