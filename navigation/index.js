import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/homeScreen";
import LearnScreen from "../screens/learnScreen";
import WatchScreen from "../screens/watchScreen";
import OnboardingScreen from "../screens/onboardingScreen";
import Shopscreen from "../screens/shopScreen";
import merchScreen from "../screens/merchScreen";
import iccpasscreen from "../screens/iccpasscreen";
import iccpointsscreen from "../screens/iccpointsscreen";
import matchticket from "../screens/matchticket";

const AppStack = createNativeStackNavigator();
const BottomBar = createBottomTabNavigator();

export function BottomBarTab(){
    return(
        <BottomBar.Navigator >
            <BottomBar.Screen name="bottom_bar_home" component={HomeScreen} options={{ title: 'Home' }}/>
            <BottomBar.Screen name="bottom_bar_watch" component={WatchScreen} options={{ title: 'Watch' }}/>
            <BottomBar.Screen name="bottom_bar_learn" component={LearnScreen} options={{ title: 'Learn' }}/>
            <BottomBar.Screen name="bottom_bar_shop" component={Shopscreen} options={{ title: 'Shop' }}/>
        </BottomBar.Navigator>  
    )
}

export default function AppNavigation(){
    return (
        <AppStack.Navigator initialRouteName='bottom_bar' screenOptions={{headerShown:false}}>
            <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
            <AppStack.Screen name="Home" component={HomeScreen} />
            <AppStack.Screen name="Learn" component={LearnScreen} />
            <AppStack.Screen name="Watch" component={WatchScreen} />
            <AppStack.Screen name="Shop" component={Shopscreen} />
            <AppStack.Screen name="merchScreen" component={merchScreen} />
            <AppStack.Screen name="iccpasscreen" component={iccpasscreen} />
            <AppStack.Screen name="iccpointsscreen" component={iccpointsscreen} />
            <AppStack.Screen name="matchticket" component={matchticket} />
            <AppStack.Screen name="bottom_bar" component={BottomBarTab} />
        </AppStack.Navigator>
    )
}