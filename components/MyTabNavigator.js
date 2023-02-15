import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Weather from "../screens/Weather";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MyTabNavigator = () => {
  return (
    <Tab.Navigator
      
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size}) => {
            <Ionicons name="Home"  />
          }
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Weather"
        component={Weather}
      />
    </Tab.Navigator>
  );
};

export default MyTabNavigator;
