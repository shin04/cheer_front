import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingView from './SettingView'
import MainView from './MainView';
import LoginView from './LoginView';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen name="Home" component={LoginView} />
        <Tab.Screen name="Settings" component={SettingView} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
