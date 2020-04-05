import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackStart from './StackStart'

class Navigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
              <StackStart />
            </NavigationContainer>
          );
    }
}

export default Navigation;