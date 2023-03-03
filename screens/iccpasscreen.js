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
  import { useDispatch, useSelector } from "react-redux";
  import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../Cart";
  import { YellowBox } from "react-native-web";
  import NavBar from '../components/navbar'
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
  import { StatusBar } from 'expo-status-bar';


export default function iccpasscreen () {
  //const tabBottomHeight = useBottomTabBarHeight();
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const images = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrc_VcnrhhwOQIFQ0CAftTfY4BmPETpCFhcQ&usqp=CAUw",
      name: "ICC Pass 1",
    },
    {
      id: "1",
      image:
        "https://www.sluggers-putters.com/wp-content/uploads/2019/06/Season_Pass_Red.png",
      name: "ICC Pass 2",
    },
    {
      id: "2",
      image:
        "https://i.pinimg.com/474x/ef/36/e2/ef36e24a16550237d67bdf2319322cf9.jpg",
      name: "ICC Pass 3",
    },
    {
      id: "3",
      image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTI5UieCWPyqm51rVoEb3Mcw7Nm93_-wh1vw&usqp=CAU",
       name: "ICC Pass 4",
    },
  ];
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  }
  const decreaseQuantity = (item) => {
    if(item.quantity == 1){
      dispatch(removeFromCart(item));
    }else{
      dispatch(decrementQuantity(item));
    }
  }
  return (
    <SafeAreaView style={{ 
      flex : 1,
      //padding : 15,
      backgroundColor :'rgba(2,43,89,255)',
      paddingTop: StatusBar.currentHeight,
      }}>
      <NavBar/>
      <ScrollView style={[styles.scrollView  ]}>
      {images.map((item) => (
        <Pressable
         // onPress={navigator.navigate}
          key={item.id}
          style={{ flex : 1 ,flexDirection: "row",  backgroundColor:"rgba(2,43,89,255)" , padding : 20 , paddingBottom : 50}}
        >
          <View style={{margin: 10, borderColor: "black" }}>
            <Image
              style={{width: 200, height: 200, borderRadius: 10, backgroundColor : "white"}}
              source={{ uri: item.image }}
            />
          </View>
          <View style={{flex : 1 , margin: 10 , justifyContent : "space-around" , position : "relative"}}>
            <Text style={{ fontSize : 20 , fontWeight: "bold" , color:"white" }}>{item.name}</Text>
            <Text style={{ fontSize : 10 , color: 'white' }}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail</Text>
            {cart.some((value) => value.id == item.id) ? (
              <Pressable style = {{backgroundColor:"black", height: 40, width: 160 ,}}  onPress={() => removeItemFromCart(item)}>
                <Text
                  style={{
                    borderStyle: "bold",
                    borderWidth: 2,
                    marginVertical: 5,
                    padding: 5,
                    color:"white"
                  }}
                >
                  REMOVE FROM CART
                </Text>
              </Pressable>
            ) : (
              <Pressable style = {{backgroundColor:"black", height: 40, width: 110}} onPress={() => addItemToCart(item)}>
                <Text
                  style={{
                    borderColor: "black",
                    borderWidth: 2,
                    marginVertical: 5,
                    padding: 5,
                    color:"white"
                  }}
                >
                  ADD TO CART
                </Text>
              </Pressable>
            )}
          </View>
        </Pressable>
      ))}

      {cart.map((item,index) => (
        <View style={{ flex : 1 , flexDirection :"row" , justifyContent : "space-between" ,alignItems : "center", paddingHorizontal : 50 , margin : 10 , height : 50}} key={index}>
          <View style={{backgroundColor : 'white' , borderRadius : 10 , padding : 10 , width : 150 , alignItems : "center" , height : 50}}><Text>{item.name}</Text></View>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 5,
              width: 'auto',
              height : 30
            }}
          >
            <Pressable onPress={() => decreaseQuantity(item)}>
              <Text
                style={{
                  fontSize: 25,
                  color: "red",
                  paddingHorizontal: 10,
                  paddingBottom : 5
                }}
              >
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  paddingHorizontal: 10,
                  paddingBottom : 5
                }}
              >
                {item.quantity}
              </Text>
            </Pressable>

            <Pressable onPress={() => increaseQuantity(item)}>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  paddingHorizontal: 10,
                  paddingBottom : 5
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        </View>
      ))}
      </ScrollView>
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    scrollView: {
      //backgroundColor: 'white',
      //marginHorizontal: 50,
      width: "auto"
    },
  });
  