import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Menu = ({toggleModal,navi,setnavi,navigation}) => {
  return (
    <View style={{width:"100%", height:"100%",display:"flex",flexDirection:"row"}}>
    <View style={{flex:1,paddingVertical:20,flexDirection:"column",backgroundColor:"white",width:"70%",borderTopRightRadius:20,borderBottomRightRadius:20}}>
      <View style={{flex:1,alignItems:"center",justifyContent:"center",maxHeight:"10%"}}>
        <Text style={{fontSize:34}}>Mini Angles</Text>
      </View>
      <View style={{paddingHorizontal:20,paddingVertical:20}}>
      <Image source={require("../../assets/Profile.png")} style={{width:62,height:62,marginHorizontal:15}}/>
      <Text style={{fontSize:20,marginTop:20,fontWeight:"500"}}>Yash Goyal</Text>
      </View>
      <View style={{width:"90%",marginHorizontal:"auto",borderWidth:1,borderColor:"#acacac",marginVertical:"9%"}}></View>
      <View style={{flex:1,alignItems:"flex-start",justifyContent:"flex-start",marginHorizontal:"17%"}}>
      <Text style={{fontSize:20,fontWeight:"500",marginVertical:20,color:navi==="Home"?"#FE804D":"#000000", textDecorationLine: navi === "Home"?"underline":"none"}} onPress={()=> {
        setnavi("Home")
        toggleModal();
      }}>Home</Text>
      <Text style={{fontSize:20,fontWeight:"500",marginVertical:20,color:navi==="Analytics"?"#FE804D":"#000000", textDecorationLine: navi === "Analytics"?"underline":"none"}} onPress={()=> {
        setnavi("Analytics")
        toggleModal();
      }}>Analytics</Text>
      <Text style={{fontSize:20,fontWeight:"500",marginVertical:20,color:navi==="Learn"?"#FE804D":"#000000", textDecorationLine: navi === "Learn"?"underline":"none"}} onPress={()=> {
        setnavi("Learn")
        toggleModal();
      }}>Learn</Text>
      <Text style={{fontSize:20,fontWeight:"500",marginVertical:20,color:navi==="Support"?"#FE804D":"#000000", textDecorationLine: navi === "Support"?"underline":"none"}} onPress={()=> {
        setnavi("Support")
        toggleModal();
      }}>Support</Text>
      </View>

      <View style={{flex:1,alignItems:"flex-start",justifyContent:"center",maxHeight:"10%",marginHorizontal:"20%"}}>
      <Text style={{fontSize:18,fontWeight:"900"}} onPress={()=> navigation?.navigate("Splash") }>Logout</Text>
      </View>
    </View>

    <View style={{width:"30%", height:"100%"}}>
    <Text style={{width:"100%",height:"100%"}} onPress={()=> toggleModal()}></Text>
    </View>

    </View>
  );
}

export default Menu;
