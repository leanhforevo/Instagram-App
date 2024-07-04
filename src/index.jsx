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
const hideHeader = {headerShown: false};
import Navigation from './navigation/Navigations';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <Navigation />
    </View>
  );
}
