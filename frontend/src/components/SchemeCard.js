import React from 'react';
import { View, Text,Image } from 'react-native';

const SchemeCard = ({image,title,title2,title3,button}) => {
  return (
    <View style={{flex:1,maxHeight:172,flexDirection:"row",marginVertical:10,borderRadius:20,backgroundColor:"#FE804D"}}>
       <View style={{flex:1,flexDirection:"column",width:"70%"}}>
       <Text style={{paddingHorizontal:20,paddingTop:14,fontSize:14,fontWeight:"800",color:"#1C1B1FB3"}}>{title}</Text>

       <Text style={{color:"#1C1B1F",marginTop:18,marginHorizontal:"8%",fontSize:14}}>{title2}</Text>
       <Text style={{color:"#1C1B1F",marginHorizontal:"8%",marginTop:1,fontSize:18,fontWeight:"900"}}>{title3}</Text>

       <Text style={{color:"#ffffff",marginTop:14,marginHorizontal:"8%",fontSize:16,fontWeight:"400"}} >{button}</Text>
       
       </View>
       <View style={{width:"30%",height:"40",alignItems:"flex-start",justifyContent:"center"}}>
       {
        image === "bank" && (<Image source={require("../../assets/bank.png")} />)
       }

       {
        image === "score" && (<Image source={require("../../assets/score.png")} />)
       }
       </View>
    </View>
  );
}

export default SchemeCard;
