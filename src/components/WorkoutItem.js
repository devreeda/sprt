import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'

const {width, height} = Dimensions.get('window')

export default class WorkoutItem extends Component {
    render() {
        const {
            item,
            navigation
        } = this.props
        const {
            main_container,
            background_image,
            content_container,
            name_text,
            subtext_container,
            sub_text
        } = styles
        return (
            <TouchableOpacity style={main_container} 
            onPress={() => navigation.navigate("SingleWorkout", {
                item
            })}>
                <ImageBackground source={item.imageBackground} style={background_image}
                imageStyle={{borderRadius: 5}}>
                    <View style={content_container}>
                        <Text style={name_text}>{item.name}</Text>
                        <View style={subtext_container}>
                            <Text style={sub_text}>{item.level} - </Text>
                            <Text style={sub_text}>{item.time} Mins - </Text>
                            <Text style={sub_text}>{item.calories} Calories</Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: height*0.23,
        borderRadius: 10,
    },
    background_image: {
        flex: 1,
        marginLeft: 4,
        marginRight: 4,
        margin: 2,
    },
    content_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    name_text: {
        color: 'white',
        fontSize: width*0.1,
        fontWeight: '600'
    },
    subtext_container: {
        flexDirection: 'row'
    },
    sub_text: {
        color: 'white',
    },
})
