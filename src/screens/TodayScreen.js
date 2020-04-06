import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import HeaderToday from '../components/HeaderToday'

const {width, height} = Dimensions.get('window')

export default class TodayScreen extends Component {
  render() {
    const {
      main_container,
      image_background,
      content_container,
      up_container,
      down_container,
      quote_text,
      author_text,
      author_container,
      trait
    } = styles
    return (
      <View style={main_container}>
        <ImageBackground style={image_background} source={require('../images/hills.jpg')}>
          <View style={content_container}>
          <HeaderToday />
            <View style={up_container}>
              <Text style={quote_text}>The future belongs to those who believe in the beauty of their dreams.</Text>
              <View style={author_container}>
                <View style={trait}/>
                <Text style={author_text}>Eleanor Roosevelt</Text>
              </View>
            </View>
            <View style={down_container}>

            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  image_background: {
    flex: 1
  },
  content_container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  up_container: {
    flex: 3,
    justifyContent: "center",
    padding: width*0.05
  },
  down_container: {
    flex: 1,
  },
  quote_text: {
    fontSize: width*0.10,
    fontWeight: '700'
  },
  author_text: {
    textAlign: 'right',
    fontSize: width*0.05,
    fontWeight: '700'
  },
  author_container: {
    paddingTop: height*0.08,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  trait: {
    width: width*0.1,
    height: 2,
    backgroundColor: 'black',
    marginRight: 10
  }
})