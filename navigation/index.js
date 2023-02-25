import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/homeScreen";
import LearnScreen from "../screens/learnScreen";
import WatchScreen from "../screens/watchScreen";
import ShopScreen from "../screens/shopScreen";

const AppStack = createNativeStackNavigator();

export default function AppNavigation(){
    return (
        <AppStack.Navigator >
            <AppStack.Screen name="Home" component={HomeScreen} />
            <AppStack.Screen name="Learn" component={LearnScreen} />
            <AppStack.Screen name="Watch" component={WatchScreen} />
            <AppStack.Screen name="Shop" component={ShopScreen} />
        </AppStack.Navigator>
    )
}