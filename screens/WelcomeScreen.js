import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Button from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
     <View style={styles.MainContainer}>
       <View style={styles.Container}>
      <Image style={styles.logo} source={require('../assets/little-lemon-logo.png')}/>

      
      <Text style={styles.ContainerTitle}>
        Little Lemon, your local Mediterranean Bistro
      </Text>

      </View>

      <Button onPress={()=>{
        navigation.navigate("Subscribe");
      }}>
        NewsLetter
      </Button>

      </View>
      )};


  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      padding: 24,
      backgroundColor: 'white',
      justifyContent: 'space-between',
    },
    Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      height: 200,
      width: 300,
      resizeMode: "contain",
    },
    ContainerTitle: {
      marginTop: 48,
      paddingVertical: 10,
      color: "#333333",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
    },
  });

export default WelcomeScreen;
