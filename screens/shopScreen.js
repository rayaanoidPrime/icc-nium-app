import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  ViewComponent,
TouchableOpacity,
} from "react-native";
import React from "react";
import NavBar from '../components/navbar'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../Cart";
import { StatusBar } from 'expo-status-bar';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

// ...

//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//const App = () => {
 // return (
 //   <NavigationContainer independent={true}>
 //   <Stack.Navigator>
 //   <Stack.Screen Component={Shopscreen} name="Shopscreen" options={{headerShown:false}} />
 //   <Stack.Screen Component={merchScreen} name="merchScreen"/>
 //  </Stack.Navigator>
 // </NavigationContainer>
 //)
//}

//function merchandise_screen() { return (
  //<View><Text>Merch Screen</Text></View>
//) }
const ShopScreen = (props) => {
    return (
     <SafeAreaView
     style={{
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "rgba(2,43,89,255)"
     }}>
       <View>
         <TouchableOpacity
           onPress={() => props.navigation.navigate('merchScreen')}>
         <Text style={{fontSize:25,fontWeight:"bold",colour:"black",textAlign: "center"}}>Merchandise</Text>
         </TouchableOpacity>
         <TouchableOpacity
           onPress={() => props.navigation.navigate('iccpasscreen')}>
         <Text style={{fontSize:25,fontWeight:"bold",colour:"black",textAlign: "center"}}>ICC Seasonal Pass</Text>
         </TouchableOpacity>
         <TouchableOpacity
           onPress={() => props.navigation.navigate('matchticket')}>
         <Text style={{fontSize:25,fontWeight:"bold",colour:"black",textAlign: "center"}}>Match Ticket</Text>
         </TouchableOpacity>
         <TouchableOpacity
           onPress={() => props.navigation.navigate('iccpointsscreen')}>
         <Text style={{fontSize:25,fontWeight:"bold",colour:"black",textAlign: "center"}}>ICC Points</Text>
         </TouchableOpacity>    
       </View>
     </SafeAreaView>
     )
  
  }

  
  

//function shopStack ()
//{
// return (
//   <NavigationContainer independent="true">
//   <Stack.Navigator initialRouteName="Shopscreen">
//     <Stack.Screen name="Shopscreen" component={Shopscreen}/>
//     <Stack.Screen Component={merchScreen} name="merchScreen" />
//   </Stack.Navigator>
//   </NavigationContainer>
// )
//}
export default ShopScreen;

const styles = StyleSheet.create({
  scrollView: {
    width : 'auto',
  },
});

