import React, { Component } from 'react'
import { Text, View, ImageBackground, ScrollView, StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get("window")


export default class SingleWorkoutScreen extends Component {
    render() {
        console.log(this.props.route.params.item)
        const {
            item
        } = this.props.route.params
        const {
            main_container,
            header_container,
            header_image,
            title_container,
            title_text,
            description_container,
            description_title_text,
            description_text,
            exercices_container,
        } = styles
        return (
            <ScrollView style={main_container}>
                <View style={header_container}>
                    <ImageBackground source={item.imageBackground} style={header_image}>
                        <View style={title_container}>
                            <Text style={title_text}>{item.name}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={description_container}>
                    <Text style={description_title_text}>{item.level} - {item.time} Mins - {item.calories} Calories</Text>
                    <Text style={description_text}>{item.description}</Text>
                </View>
                <View style={exercices_container}>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    header_container: {
        height: height*0.3,
    },
    title_container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
    },
    header_image: {
        flex: 1
    },
    title_text: {
        color: "white",
        fontSize: width*0.12,
        fontWeight: '600',
        paddingLeft: 20,
        paddingBottom: 20,
    },
    description_container: {
        padding: 12,
    },
    description_title_text: {
        fontSize: width*0.04,
        fontWeight: '600',
        paddingBottom: 6,
    },
    description_text: {
        fontSize: width*0.04
    },
    exercices_container: {
        
    },
})
