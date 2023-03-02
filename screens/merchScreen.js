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
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function merchScreen () {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const images = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrc_VcnrhhwOQIFQ0CAftTfY4BmPETpCFhcQ&usqp=CAUw",
      name: "Merchandise 1",
    },
    {
      id: "1",
      image:
        "https://www.sluggers-putters.com/wp-content/uploads/2019/06/Season_Pass_Red.png",
      name: "Merchandise 2",
    },
    {
      id: "2",
      image:
        "https://i.pinimg.com/474x/ef/36/e2/ef36e24a16550237d67bdf2319322cf9.jpg",
      name: "Merchandise 3",
    },
    {
      id: "3",
      image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTI5UieCWPyqm51rVoEb3Mcw7Nm93_-wh1vw&usqp=CAU",
       name: "Merchandise 4",
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
    <SafeAreaView>
      <ScrollView style={[styles.scrollView , {height:500}]}>
      <Text style={{ textAlign: "center", fontSize: 20, backgroundColor:"black", color:"white"}}>
        ICC Shop
      </Text>
      {images.map((item) => (
        <Pressable
         // onPress={navigator.navigate}
          key={item.id}
          style={{ flexDirection: "row", alignItems: "center" , backgroundColor:"rgba(2,43,89,255)"}}
        >
          <View style={[styles.card , {margin: 10, borderColor: "black" }]}>
            <Image
              style={[styles.card, {width: 200, height: 200, borderRadius: 10, color:"white"}]}
              source={{ uri: item.image }}
            />
          </View>
          <View>
            <Text style={[styles.card, { fontWeight: "bold" , color:"white"}]}>{item.name}</Text>
            {cart.some((value) => value.id == item.id) ? (
              <Pressable style = {{backgroundColor:"black", height: 40, width: 160}}  onPress={() => removeItemFromCart(item)}>
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
        <View style={{padding:10}} key={index}>
          <Text>{item.name}</Text>
          <Pressable
            style={{
              flexDirection: "row",
              marginTop:20,
              alignItems: "center",
              backgroundColor: "dodgerblue",
              borderRadius: 5,
              width: 120,
            }}
          >
            <Pressable onPress={() => decreaseQuantity(item)}>
              <Text
                style={{
                  fontSize: 25,
                  color: "red",
                  paddingHorizontal: 10,
                }}
              >
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
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
      backgroundColor: 'white',
      marginHorizontal: 50,
      height : "auto",
      width: "auto"
    },
  });
  