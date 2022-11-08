
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


import Main from './common/Main';
import Data from './common/Data';
import Reminder from './common/Reminder';
import Settings from './common/Settings';
import WebViewUI from './common/WebView';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="summary" component={Main} options={{headerShown: false, tabBarLabel: 'Сводка', tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="star" size={size} color={color} />
        )}}/>
        <Tab.Screen name="data" component={Data} options={{headerShown: false, tabBarLabel: 'Данные',  tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="person" size={size} color={color} />
        )}} />
        <Tab.Screen name="reminders" component={Reminder} options={{headerShown: false, tabBarLabel: 'Напоминания', tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="chevron-down-circle" size={size} color={color} />
        )}} />
        <Tab.Screen name="settings" component={Settings} options={{headerShown: false, tabBarLabel: 'Настройки', tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="cog" size={size} color={color} />
        )}} />
    </Tab.Navigator>
  )
};
 
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'dark-content'}/>
        <Stack.Navigator>
          <Stack.Screen 
            name="Root"
            component={Root}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="browser"
            component={WebViewUI}
            options={{headerLargeTitle: 'Браузер'}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
