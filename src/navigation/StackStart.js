import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './TabNav'
import StartScreen from '../screens/StartScreen';


const Stack = createStackNavigator();

class StackStart extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Start" component={StartScreen} />
                <Stack.Screen name="TabNav" component={TabNav}/>
            </Stack.Navigator>
          );
    }
}

export default StackStart;