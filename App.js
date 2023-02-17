import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyStackNavigator from './components/myStackNavigator';
import MyTabNavigator from './components/MyTabNavigator';


const App = () => {
  
  return (
    <NavigationContainer>
    {/* <MyStackNavigator /> */}
    <MyTabNavigator />
  </NavigationContainer>
  )
}

export default App