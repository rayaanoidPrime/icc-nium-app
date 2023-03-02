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
import { YellowBox } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import merchScreen from "./merchScreen";
import AppNavigation from "../navigation";

const Stack = createNativeStackNavigator();

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

const Shopscreen = (props) => {
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
         onPress={() => props.navigation.navigate("merchScreen")}>
       <Text style={{fontSize:25,fontWeight:"bold",colour:"black",textAlign: "center"}}>Merchandise</Text>
       
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
export default Shopscreen;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 50,
    height : "auto",
    width: "auto"
  },
});
