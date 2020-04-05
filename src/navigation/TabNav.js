import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodayScreen from '../screens/TodayScreen'
import WorkoutsScreen from '../screens/WorkoutsScreen'
import ProgramsScreen from '../screens/ProgramsScreen'
import ProgressScreen from '../screens/ProgressScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TODAY" component={TodayScreen} />
      <Tab.Screen name="WORKOUTS" component={WorkoutsScreen} />
      <Tab.Screen name="PROGRAMS" component={ProgramsScreen} />
      <Tab.Screen name="PROGRESS" component={ProgressScreen} />
      <Tab.Screen name="SETTINGS" component={SettingsScreen} />
    </Tab.Navigator>
  );
}