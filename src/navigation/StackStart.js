import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './TabNav'
import StartScreen from '../screens/StartScreen';
import HeaderToday from '../components/HeaderToday'


const Stack = createStackNavigator();

class StackStart extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Start" component={StartScreen} 
                    options={{
                        headerShown : false
                    }}
                />
                <Stack.Screen name="TabNav" component={TabNav}
                    options={{
                        gestureEnabled: false,
                        header: () =>  (
                            <HeaderToday />
                        )
                    }}
                />
            </Stack.Navigator>
          );
    }
}

export default StackStart;