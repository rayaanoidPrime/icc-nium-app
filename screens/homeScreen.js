import { View, Text , SafeAreaView , StyleSheet , ScrollView  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import NavBar from '../components/navbar'

export default function HomeScreen() {
    return (
      <SafeAreaView style={{ 
        flex : 1,
        //padding : 15,
        backgroundColor :'rgba(2,43,89,255)',
        paddingTop: StatusBar.currentHeight,
        }}>
        <NavBar />
        <ScrollView style={styles.scrollContainer}>
          <Text style={{
            paddingLeft : 15,
            justifyContent : 'flex-start',
            fontFamily : 'Segoe UI',
            fontWeight : '500',
            fontSize : 40,
            color: 'white',

          }}>What's New</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text>Card</Text>
              </View>
              <Text style={{
                fontFamily : "",
                color : "white",
                
              }}>Description of the card</Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text>Card</Text>
              </View>
              <Text style={{
                fontFamily : "",
                color : "white",
                
              }}>Description of the card</Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text>Card</Text>
              </View>
              <Text style={{
                fontFamily : "",
                color : "white",
                
              }}>Description of the card</Text>
            </View>
          </ScrollView>
          <Text style={{
            paddingLeft : 15,
            justifyContent : 'flex-start',
            fontFamily : 'Segoe UI',
            fontWeight : '500',
            fontSize : 40,
            color: 'white',

          }}>Explore</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.exploreCard}>
                <Text>Card</Text>
              </View>
              <Text style={{
                fontFamily : "",
                color : "white",
                
              }}>Description of the card</Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.exploreCard}>
                <Text>Card</Text>
              </View>
              <Text style={{
                fontFamily : "",
                color : "white",
                
              }}>Description of the card</Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.exploreCard}>
                <Text>Card</Text>
              </View>
              <Text style={{
                fontFamily : "",
                color : "white",
                
              }}>Description of the card</Text>
            </View>
          </ScrollView>
          <Text style={{
            paddingLeft : 15,
            justifyContent : 'flex-start',
            fontFamily : 'Segoe UI',
            fontWeight : '500',
            fontSize : 40,
            color: 'white',

          }}>Stats</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.statsCard}>
                <Text>Card</Text>
              </View>
              <Text style={{
                fontFamily : "",
                color : "white",
                
              }}>Description of the card</Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.statsCard}>
                <Text>Card</Text>
              </View>
              <Text style={{
                fontFamily : "",
                color : "white",
                
              }}>Description of the card</Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.statsCard}>
                <Text>Card</Text>
              </View>
              <Text style={{
                fontFamily : "",
                color : "white",
                
              }}>Description of the card</Text>
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container : {
      flex : 1,
      flexDirection : 'column',
      padding : '20%',
      backgroundColor :'dodgerblue',
    },
    card : {
      height: 150,
      width: 200,
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
      height : 'auto',
      margin : 5,
      flex : 1,
      textAlign: 'center'
    }
  })