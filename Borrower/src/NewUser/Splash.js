import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {

  return (
   <View style={styles.container}>
     <Image source={require("../../assets/introimage.png")} />
     <Animatable.Text style={styles.title}>
     Spend as you wish
     </Animatable.Text>
     <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Mobile')} >
       <Text style={styles.buttontext}>Get Started</Text>
     </TouchableOpacity>
   </View>
  );
}

export default Splash;


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        backgroundColor:"#164938"
    },
    title:{
        fontWeight:900,
        fontSize:50,
        paddingHorizontal:3,
        marginTop:"10%",
        color:"#ffffff"
    },
    button:{
        marginTop:"14%",
        paddingHorizontal:30,
        paddingVertical:15,
        borderRadius:20,
        backgroundColor:"#FE804D",
        marginBottom:"10%"
    },
    buttontext:{
        fontSize:20,
        color:"#ffffff"
    }
})