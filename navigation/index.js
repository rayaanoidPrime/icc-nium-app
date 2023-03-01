import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import HomeScreen from "../screens/homeScreen";
import LearnScreen from "../screens/learnScreen";
import WatchScreen from "../screens/watchScreen";
import ShopScreen from "../screens/shopScreen";
import OnboardingScreen from "../screens/onboardingScreen";

const AppStack = createNativeStackNavigator();
const BottomBar = createBottomTabNavigator();

export function BottomBarTab(){
    return(
        <BottomBar.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'bottom_bar_home') {
                iconName = 'home'
              } else if (route.name === 'bottom_bar_watch') {
                iconName = 'play';
              }
              else if (route.name === 'bottom_bar_learn') {
                return <FontAwesome name="comments-o" size={size} color={color} />
              }
              else if (route.name === 'bottom_bar_shop') {
                return <FontAwesome name="shopping-bag" size={size} color={color} />
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveBackgroundColor : 'lightblue',
            headerShown : false
          })}>
            <BottomBar.Screen name="bottom_bar_home" component={HomeScreen} options={{ title: 'Home' }}/>
            <BottomBar.Screen name="bottom_bar_watch" component={WatchScreen} options={{ title: 'Watch' }}/>
            <BottomBar.Screen name="bottom_bar_learn" component={LearnScreen} options={{ title: 'Learn' }}/>
            <BottomBar.Screen name="bottom_bar_shop" component={ShopScreen} options={{ title: 'Shop' }}/>
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
            <AppStack.Screen name="Shop" component={ShopScreen} />
            <AppStack.Screen name="bottom_bar" component={BottomBarTab} />
        </AppStack.Navigator>
    )
}