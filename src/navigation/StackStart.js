import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './TabNav'
import StartScreen from '../screens/StartScreen';
import WorkoutsScreen from '../screens/WorkoutsScreen'
import SingleWorkoutScreen from '../screens/SingleWorkoutScreen'


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
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Workouts" component={WorkoutsScreen}

                />
                <Stack.Screen name="SingleWorkout" component={SingleWorkoutScreen}

                />
            </Stack.Navigator>
          );
    }
}

export default StackStart;