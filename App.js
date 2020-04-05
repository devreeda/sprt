import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StartScreen from './src/screens/StartScreen'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <StartScreen />
    );
  }
}
