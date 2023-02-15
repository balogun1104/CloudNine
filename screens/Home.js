import React from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Home = () => {
  return (
    <SafeAreaView>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Landing Page</Text>
    </View>
    </SafeAreaView>
  )
}

export default Home