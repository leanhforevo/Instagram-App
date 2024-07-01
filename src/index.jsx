import * as React from 'react';

import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './views/Home';
import SearchScreen from './views/Search';
import DetailsScreen from './views/Details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const hideHeader = {headerShown: false,};

const Tabbar = () => {
  return (
    <Tab.Navigator
    
      screenOptions={({route}) => ({
        tabBarShowLabel:false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Search') {
            iconName = 'search-outline';
          }
          else if (route.name === 'Add') {
            iconName = 'duplicate-outline';
          }
          else if (route.name === 'Reel') {
            iconName = 'nuclear-outline';
          }
          else if (route.name === 'Settings') {
            iconName = 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={hideHeader} />
      <Tab.Screen name="Search" component={SearchScreen} options={hideHeader} />
      <Tab.Screen name="Add" component={HomeScreen} options={hideHeader} />
      <Tab.Screen name="Reel" component={SearchScreen} options={hideHeader} />
      <Tab.Screen name="Settings" component={HomeScreen} options={hideHeader} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabbar" component={Tabbar} options={hideHeader} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
