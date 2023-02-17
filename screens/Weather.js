import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useQuery } from 'react-query';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Weather = () => {
  const fetchWeather = () => {
    const response = fetch(`${process.env.WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=London`)
    return response
  }
  return (
    <SafeAreaView>
      <TouchableOpacity style={{
        backgroundColor: 'yellow'
      }}> 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Weather Page</Text>
    </View>
      </TouchableOpacity>
       
    </SafeAreaView>
  )
}

export default Weather