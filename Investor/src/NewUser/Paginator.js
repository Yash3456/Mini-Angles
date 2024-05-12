import React from 'react';
import { StyleSheet,Text, View,Animated,useWindowDimensions } from 'react-native';
import { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';

const Paginator = ({data,scrollX}) => {
  const {width} = useWindowDimensions();
  console.log(scrollX);
  return (
    <View style={{flexDirection:"row", height:64, display:"flex",alignItems:"flex-start", justifyContent:"center"}}>
       {
        data.map((_,i) => {
         
          const inputrange = [(i-1)*width, i*width,(i+1)*width];
          
           
          const rstyle = useAnimatedStyle(()=>{
            const scale = interpolate(scrollX.value,[(i-1)*width, i*width,(i+1)*width], [10,20,10], Extrapolation.CLAMP);
            return{
             transform: [{scale}],
            };
          });

          return <Animated.View style={[styles.dot , rstyle]} key={i.toString()} />;
        })
       }
    </View>
  );
}

export default Paginator;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center"
    },
    dot:{
      height:10,
      borderRadius:5,
      backgroundColor: "#ffffff",
      marginHorizontal:8
    }
})