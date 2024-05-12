import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
const BudgetButton = ({currency,amount,rangetype,setamount}) => {

  console.log(amount)

  return (
    <View style={styles.container}>
     <Text style={styles.title}>{rangetype}</Text>
     <View style={styles.rangebox}>
     <Text style={styles.currency}>{currency}</Text> 
     <TextInput style={styles.amount} value={amount} onChangeText={setamount} />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    color:"#00000080",
    fontWeight:"500"
  },
  tagb: {
   justifyContent:"center",
   marginVertical:"3%",
   marginRight:"4%"
  },
  rangebox:{
   flexDirection:"row",
   marginVertical:"3%",
   alignItems:"center",
   paddingHorizontal:"3%",
   borderRadius:3,
  },
  container:{
   borderWidth: 1,
   width:"80%",
   borderColor: '#acacac80',
   borderRadius:10,
   padding:5
  },
  currency:{
    fontWeight:"600",
    fontSize: 24,
    color:"#363132"
  },
  bar:{
    fontWeight:"900",
    fontSize: 18,
    marginHorizontal:"1%"
  },
  amount:{
    fontWeight:"400",
    fontSize: 12,
    paddingHorizontal:10,
    marginHorizontal:2,
    color:"#363132",
    backgroundColor:"#ffffff"
  }

});



export default BudgetButton
