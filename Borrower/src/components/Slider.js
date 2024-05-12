import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BudgetButton from './BudgetButton';
import { useResponsive } from 'react-native-responsive-hook';
import RangeSlider from './RangeSlider';

const Budget = ({ navigation, route }) => {

  const [minValue, setMinValue] = useState("10,000");
  const [maxValue, setMaxValue] = useState("50,000,000");

  const { styles } = useStyles();

  const [value, setvalue] = useState(20);

  const handleContinue = () => {

    const giftselection = {
      ...route.params,
       minValue: minValue,
       maxValue: maxValue
    }

    navigation.navigate("number", giftselection);
  }

  const handleminvalue =(data)=>{
    setMinValue(data);
  }

 const handlemaxvalue= (data)=>{
  setMaxValue(data);
 }

  return (

        <View style={{ paddingVertical: 20, backgroundColor: "#fff", marginHorizontal: 10, borderRadius: 10 }}>

          <View style={styles.range}>
            <View style={styles.max}><BudgetButton currency="₹" amount={minValue} setamount={setMinValue} rangetype="Min" /></View>
            <View style={styles.min}><BudgetButton currency="₹" amount={maxValue} setamount={setMaxValue} rangetype="Max" /></View>
          </View>
          <View style={styles.slider}>
          <RangeSlider
          sliderWidth={300}
          min={parseInt(minValue,10)}
          max={parseInt(maxValue,10)}
          step={10}
          onValueChange={range => {
               let minR = String(range.min);
               let maxR = String(range.max);

                setMinValue(minR);
                setMaxValue(maxR);

          }}
        />
          </View>

        </View>

  );
};


const useStyles = () => {

  const { isLandscape, isPortrait, wp, hp, vw, vh, rem, rf, breakpointGroup } = useResponsive();

  const styles = StyleSheet.create({
    range: {
      display: "flex",
      flexDirection: "row",
      width: vw(100),
      height:vh(7)
    },
    max: {
      width: vw(37),
      marginHorizontal:vw(  1),
    },
    min: {
      width: vw(37),
      marginHorizontal:vw(2),
      display:"flex",
      alignItems:"flex-end"
    },
    desc:{
       fontSize: 14,
        fontFamily: "SFPro_Font",
        marginHorizontal:vw(5),
        marginVertical:vh(2),
    },
    slider:{
      marginTop:vh(7),
    }

  });

  return { styles };

};

export default Budget;


