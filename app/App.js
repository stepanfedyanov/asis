
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './common/Main';
import Data from './common/Data';
import Reminder from './common/Data';
import Settings from './common/Settings';
import WebViewUI from './common/WebView';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Сводка" component={Main}/>
        <Tab.Screen name="Данные" component={Main} options={{headerShown: false}} />
        <Tab.Screen name="Напоминания" component={Main} options={{headerShown: false}} />
        <Tab.Screen name="Настройки" component={Settings} options={{headerShown: false}} />
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
            name='Браузер'
            component={WebViewUI}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
