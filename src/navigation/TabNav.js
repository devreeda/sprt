import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodayScreen from '../screens/TodayScreen'
import WorkoutsScreen from '../screens/WorkoutsScreen'
import ProgramsScreen from '../screens/ProgramsScreen'
import ProgressScreen from '../screens/ProgressScreen'
import SettingsScreen from '../screens/SettingsScreen'
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconAD from 'react-native-vector-icons/AntDesign'
import IconF from 'react-native-vector-icons/Feather'
import IconSLI from 'react-native-vector-icons/SimpleLineIcons'
import {Dimensions, Text} from 'react-native'

const {width, height} = Dimensions.get('window')

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        height: height*0.12
      },
      labelStyle: {
        fontSize: height*0.015,
        fontWeight: '500'
      },
      activeTintColor: 'rgb(255, 0, 110)',
      inactiveTintColor: 'black'
    }}>
      <Tab.Screen name="TODAY" component={TodayScreen} 
        options={{
          tabBarIcon: ({ focused, color, size}) => (
          <IconF name="clipboard" size={height*0.045} color={color} />
        )}
        }
      />
      <Tab.Screen name="WORKOUTS" component={WorkoutsScreen} 
        options={{
          tabBarIcon: ({ focused, color, size}) => (
          <IconFA5 name="dumbbell" size={height*0.04} color={color} />
        )}
        }
      />
      <Tab.Screen name="PROGRAMS" component={ProgramsScreen} 
        options={{
          tabBarIcon: ({ focused, color, size}) => (
          <IconAD name="filetext1" size={height*0.04} color={color} />
        )}
        }
      />
      
      <Tab.Screen name="PROGRESS" component={ProgressScreen} 
        options={{
          tabBarIcon: ({ focused, color, size}) => (
          <IconSLI name="chart" size={height*0.04} color={color} />
        )}
        }
      />
      <Tab.Screen name="SETTINGS" component={SettingsScreen} 
        options={{
          tabBarIcon: ({ focused, color, size}) => (
          <IconF name="settings" size={height*0.04} color={color} />
        )}
        }
      />
    </Tab.Navigator>
  );
}