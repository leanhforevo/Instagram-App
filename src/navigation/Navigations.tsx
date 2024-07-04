import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../views/Details';
import Tabbar from './Tabbar';

const Stack = createNativeStackNavigator();
const hideHeader = { headerShown: false, };

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabbar" component={Tabbar} options={hideHeader} />
                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
