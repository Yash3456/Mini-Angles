import React from 'react';
import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const Renderitem = ({item}) => {
    const {width,height} = useWindowDimensions();
  return (
   <View style={[styles.itemcontainer,{width,height,backgroundColor:item.backgroundColor}]}>
   <Image source={item.image} />   
   <Text style={[styles.itemtext, {color: item.textColor}]}>{item.text}</Text>
   </View>
  );
}

export default Renderitem;

const styles = StyleSheet.create({
    itemcontainer:{
        flex:1,
        alignItems:"center",
        paddingTop:40
    },
    itemtext:{
        marginTop:10,
        textAlign:"center",
        fontSize:44,
        fontWeight:"bold",
        marginHorizontal:20
    }
})
