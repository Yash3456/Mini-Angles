import { Entypo, EvilIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SchemeCard from '../components/SchemeCard';
import Modal from 'react-native-modal';
import Menu from '../components/Menu';

const Home = ({navigation}) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [navi,setnavi] = useState("Home");

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

  return (
   <View style={styles.container}>
     <View style={{width:"100%",marginLeft:30,flexDirection:"row",alignItems:"center",display:"flex",justifyContent:"center"}}>
      <TouchableOpacity style={{width:"80%",marginTop:10}} onPress={toggleModal}>
      <Entypo name='menu' size={40} color={"#ffffff"} />
      </TouchableOpacity>
      <View style={{width:"20%"}}>
      <EvilIcons name='user' size={46} color={"#ffffff"} />
      </View>
     </View>
     
     <Text style={{color:"#ffffff",fontSize:40,marginTop:20}}>Mini Angles</Text>

     <View style={{width:"98%",marginHorizontal:"auto",height:"78%",marginTop:"10%",borderTopLeftRadius:40,borderTopRightRadius:40,backgroundColor:"white",paddingHorizontal:20,paddingVertical:40}}>
        <SchemeCard image={"bank"} title={"SMEs LOAN"} title2={"Get upto"} title3={"50L in 24 hrs!"} button={"Apply now"} />
        <SchemeCard image={"score"} title={"CREDIT TRACKER"} title2={"Track your score with"} title3={"Free Credit report"} button={"Click here"} />
          
      <Text style={{fontSize:15,fontWeight:"600",marginTop:10,marginLeft:10}}>* Terms & Conditions</Text> 
       <Text style={{fontSize:15,fontWeight:"400",marginTop:4,marginLeft:"4%"}}> Loans upto 10L, No Collaterals Needed</Text> 
       <Text style={{fontSize:15,fontWeight:"400",marginTop:4,marginLeft:"4%"}}> Loans upto 50L, Collaterals Needed</Text> 
        </View>
        <Modal 
        isVisible={isModalVisible} 
        onSwipeComplete={toggleModal}
        swipeDirection="left" 
        style={styles.modal}
        animationIn="slideInLeft" 
        animationOut="slideOutLeft" 
        backdropOpacity={0.3}
    >
    <Menu toggleModal={toggleModal} navi={navi} setnavi={setnavi} navigation={navigation} />
    </Modal>
   </View>
  );
}

export default Home;


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:"17%",
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:"#1f654D"
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
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        maxHeight:"100%",
        marginTop:"0%",
    }
})