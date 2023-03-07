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
const ShopScreen = ({navigation}) => {
    return (
     <SafeAreaView
     style={{
      flex : 1,
      //padding : 15,
      backgroundColor :'rgba(2,43,89,255)',
      paddingTop: StatusBar.currentHeight,
     }}>
      <NavBar navigation={navigation}/>
      <ScrollView style={[styles.scrollView]}>
      <ScrollView  contentContainerStyle={styles.scrollContainer}>
       <View style={styles.cardContainer}>
         <TouchableOpacity
           onPress={() => navigation.navigate('merchScreen')}>
            <View style={styles.card}>
         <Text>image</Text>
         </View>
         <Text style={{
                fontFamily : "",
                color : "white",
              }}>Merchandise</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.cardContainer}>
         <TouchableOpacity
           onPress={() =>navigation.navigate('iccpasscreen')}>
         <View style={styles.card}>
          <Text>Image</Text>
          </View>
          <Text style={{
                fontFamily : "",
                color : "white",
              }}>ICC Seasonal Pass</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.cardContainer}>
         <TouchableOpacity
           onPress={() => navigation.navigate('matchticket')}>
         <View style={styles.card}>
          <Text>Image</Text>
        </View>
        <Text style={{
                fontFamily : "",
                color : "white",
              }}>Match Ticket</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.cardContainer}>
         <TouchableOpacity
           onPress={() => navigation.navigate('iccpointsscreen')}>
         <View style={styles.card}>
          <Text>Image</Text>
          </View>
          <Text style={{
                fontFamily : "",
                color : "white",
              }}>ICC Points</Text>
         </TouchableOpacity>
       </View>
       </ScrollView>
       </ScrollView>
     </SafeAreaView>
     )
  
  }

  
export default ShopScreen;

const styles = StyleSheet.create({
  scrollView: {
    height : "auto",
     width : 'auto',
     padding : 10,
     paddingBottom : 15
  },
  container : {
    flex : 1,
    flexDirection : 'column',
    padding : '20%',
    backgroundColor :'dodgerblue',
  },
  card : {
    height: 150,
    width: 'auto',
    backgroundColor : 'white',
    borderRadius : 40,
    justifyContent : 'center',
    alignItems : 'center',
    margin : 5,
    zIndex : 10
  },
  statsCard : {
    height: 150,
    width: 150,
    backgroundColor : 'white',
    borderRadius : 75,
    justifyContent : 'center',
    alignItems : 'center',
    margin : 5,
    zIndex : 10
  },
  exploreCard : {
    height: 350,
    width: 200,
    backgroundColor : 'white',
    borderRadius : 40,
    justifyContent : 'center',
    alignItems : 'center',
    margin : 5,
    zIndex : 10
  },
  scrollContainer : {
   height : "auto",
   width : 'auto',
   padding : 10,
   paddingBottom : 15
  },
   cardContainer:{
   zIndex : 10,
   backgroundColor : "black",
   borderRadius : 40,
   height : '',
   margin : 5,
   flex : 1,
   textAlign: 'center'
  }
})

