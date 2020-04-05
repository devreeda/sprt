import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions } from 'react-native';
import ButtonPink from '../components/ButtonPink'
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

const {width, height} = Dimensions.get('window')

export default class StartScreen extends Component {
  render() {
    const {
      main_container,
      image_background,
      filter_background,
      logo_container,
      logo_image,
      logo_subtext,
      text_container,
      presentation_text,
      button_container,
      button_text,
    } = styles
    return (
      <View style={main_container}>
        <ImageBackground source={require('../images/womanJumping.jpg')} style={image_background}>
          <View style={filter_background}>
            <View style={logo_container}>
              <Image source={require('../images/logo.png')} style={logo_image}/>
              <Text style={logo_subtext}>WORKOUT FOR WOMEN</Text>
            </View>
            <View style={text_container}>
              <Text style={presentation_text}>Millions are using Workout for Women to help</Text>
              <Text style={presentation_text}>them make fitness a daily habit.</Text>
              <Text style={[presentation_text, {paddingTop: height*0.02}]}>Are you ready to start your fitness journey ?</Text>
              <ButtonPink text="LET'S GET STARTED" navigate={() => this.props.navigation.navigate("TabNav")}/>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  image_background : {
    flex: 1
  },
  filter_background: {
    flex: 1,
    backgroundColor: 'rgba(80,40,40,0.7)'
  },
  logo_container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_image: {
    width: width*0.2,
    height: width*0.2,
    marginBottom: height*0.03
  },
  logo_subtext: {
    color: 'white',
    fontSize: height*0.02,
    letterSpacing: 4,
    fontWeight: '300'
  },
  text_container: {
    flex: 1,
    alignItems: 'center',
  },
  presentation_text: {
    color: 'rgb(200, 200, 200)',
    fontSize: width*0.04,
    fontWeight: '400'
  },
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
