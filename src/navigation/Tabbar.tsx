import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../views/Home';
import SearchScreen from '../views/Search';
// import DetailsScreen from '../views/Details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const hideHeader = { headerShown: false, };

const Tabbar = () => {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;

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
            <Tab.Screen name="Reel" component={HomeScreen} options={hideHeader} />
            <Tab.Screen name="Settings" component={HomeScreen} options={hideHeader} />
        </Tab.Navigator>
    );
};
export default Tabbar
