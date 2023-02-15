import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Weather = () => {
  return (
    <View>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Weather Page</Text>
    </View>
    </View>
  )
}

export default Weather