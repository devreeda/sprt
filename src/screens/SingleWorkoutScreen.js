import React, { Component } from 'react'
import { Text, View } from 'react-native'


export default class SingleWorkoutScreen extends Component {
    render() {
        console.log(this.props.route.params.item)
        const {
            item
        } = this.props.route.params
        return (
            <View>
                <Text> textInCoponent </Text>
            </View>
        )
    }
}
