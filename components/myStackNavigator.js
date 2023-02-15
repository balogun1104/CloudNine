import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Weather from '../screens/Weather';

const Stack = createStackNavigator();

const MyStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Weather" component={Weather} />
      </Stack.Navigator>
    );
  };

  export default MyStackNavigator