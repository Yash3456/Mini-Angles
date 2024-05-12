import { Entypo, EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SchemeCard from '../components/SchemeCard';
import Modal from 'react-native-modal';
import Menu from '../components/Menu';
import HistoryTransaction from '../components/HistoryTransaction';
import { useFonts } from 'expo-font';

const Home = ({navigation}) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);

    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
    };

    const [navi,setnavi] = useState("Home");

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    
    let [fontsLoaded] = useFonts({
        Poppins_Regular: require('../../assets/Fonts/Poppins/Poppins-Regular.ttf'),
        Poppins_Medium: require('../../assets/Fonts/Poppins/Poppins-Medium.ttf'),
        Poppins_Bold: require('../../assets/Fonts/Poppins/Poppins-Bold.ttf'),
        Poppins_SemiBold: require('../../assets/Fonts/Poppins/Poppins-SemiBold.ttf'),
        Pacifio_Regular: require('../../assets/Fonts/Pacifico/Pacifico-Regular.ttf')        
    });

  return (
   <View style={{...styles.container,fontFamily: fontsLoaded ? 'Poppins_Bold': null}}>
     <View style={{width:"100%",marginLeft:30,flexDirection:"row",alignItems:"flex-start",display:"flex",justifyContent:"flex-start"}}>
      <TouchableOpacity style={{width:"80%",marginTop:"0.5%"}} onPress={toggleModal}>
      <Entypo name='menu' size={40} color={"#ffffff"} />
      </TouchableOpacity>
      <View style={{width:"20%"}}>
      <EvilIcons name='user' size={46} color={"#ffffff"} />
      </View>
     </View>
     
      {
        navi === "Home" && (
            <>
            <Text style={{color:"#ffffff",fontSize:40,marginTop:20,fontFamily:fontsLoaded?'Pacifio_Regular':null}}>Mini Angels</Text>

     <View style={{width:"98%",marginHorizontal:"auto",height:"78%",marginTop:"10%",borderTopLeftRadius:40,borderTopRightRadius:40,backgroundColor:"white",paddingHorizontal:20,paddingVertical:40}}>
        <SchemeCard image={"bank"} title={"SMEs LOAN"} title2={"Get upto"} title3={"50L in 24 hrs!"} button={"Apply now"} navigation={navigation} />
        <SchemeCard image={"score"} title={"CREDIT TRACKER"} title2={"Track your score with"} title3={"Free Credit report"} button={"Click here"} navigation={navigation} />
          
      <Text style={{fontSize:15,fontWeight:"600",marginTop:10,marginLeft:10}}>* Terms & Conditions</Text> 
       <Text style={{fontSize:15,fontWeight:"400",marginTop:4,marginLeft:"4%"}}> Loans upto 10L, No Collaterals Needed</Text> 
       <Text style={{fontSize:15,fontWeight:"400",marginTop:4,marginLeft:"4%"}}> Loans upto 50L, Collaterals Needed</Text> 
        </View>
            </>
        )
      }  

      {
        navi === "Analytics" && (
            <>
            <View style={{width:"94%",marginHorizontal:"auto",backgroundColor:"white",height:"52%",marginTop:"4%",marginBottom:"4%",borderRadius:30,padding:20}}>
            <View style={{flex:1,flexDirection:"row",maxHeight:"20%"}}>
            <Text style={{width:"80%",alignItems:"center",paddingLeft:"4%",fontSize:20,paddingTop:13,fontWeight:"700"}}>Welcome Yash,</Text>
            <Image source={require("../../assets/Profile.png")} />
            </View>
            <View style={{flex:1,maxHeight:"50%",flex:1,justifyContent:"center"}}>
            <View style={{marginVertical:"3%"}}>
            <Text style={{color:"#1C1B1F50",fontSize:20}}>Total Amount  </Text>
            <Text style={{fontSize:36,fontWeight:"500"}}>₹7,300.00</Text>
            </View>
            <View style={{marginVertical:"3%"}}>
            <Text style={{color:"#1C1B1F50",fontSize:20}}>Loan Sanctioned</Text>
            <Text style={{fontSize:36,fontWeight:"500"}}>₹10,000,000.00</Text>
            </View>
            </View>
            <View style={{flex:1,maxHeight:"20%",marginTop:"10%",flex:1,justifyContent:"center",flexDirection:"row",width:"100%",marginHorizontal:"auto"}} >
            <View style={{width:"50%",justifyContent:"center",alignItems:"flex-start",flex:1}}>
            <TouchableOpacity style={{backgroundColor:"#FE804D",width:"90%",flex:1,alignItems:"center",justifyContent:"center",borderRadius:10}} onPress={toggleModal2}>
              <Text style={{color:"#545454", fontSize:20}}> <Feather name="arrow-down-right" size={30} color="#fff" /> Deposit</Text>
            </TouchableOpacity>
            </View>

              <View style={{width:"50%",justifyContent:"center",alignItems:"flex-end",flex:1}}>
              <TouchableOpacity style={{backgroundColor:"#FE804D",width:"100%",flex:1,alignItems:"center",justifyContent:"center",borderRadius:10}} onPress={toggleModal2}>
                <Text style={{color:"#545454", fontSize:20}}> <Feather name="arrow-up-right" size={30} color="#fff" /> Withdraw</Text>
              </TouchableOpacity>
              </View>
            </View>
            </View>

            <Modal 
            isVisible={isModalVisible2} 
            onSwipeComplete={toggleModal2} 
            style={styles.modal2}
            animationIn="slideInDown" 
            animationOut="slideOutUp" 
            backdropOpacity={0.5}
            animationInTiming={800}
            animationOutTiming={800}
        >
           <View style={{flex:1,backgroundColor:"#ffffff",width:"98%",borderRadius:20,padding:20,maxHeight:"90%"}}>
            
            <View style={{flex:1,flexDirection:"row",maxHeight:"10%"}}>
             
            <View style={{width:"80%",flex:1,flexDirection:"row",marginTop:13}}>
            <Image source={require("../../assets/card1.png")} style={{width:24,height:24}} />
            <Image source={require("../../assets/card2.png")} style={{width:28,height:23,marginLeft:18}} />
            <Text style={{fontFamily: fontsLoaded?'Poppins_Medium':null, marginHorizontal:3}}>Card</Text>
            </View>
            <TouchableOpacity onPress={toggleModal2}>
            <Ionicons name="close-outline" size={44} color="#1F654D" />
            </TouchableOpacity>
            </View>

            <View style={{marginTop:18}}>
            <Text style={{fontFamily:fontsLoaded?'Poppins_Regular':null, fontSize:16,marginBottom:4}}>Card Number</Text>
            <TextInput placeholder="3235-3452-2323-2343" style={{paddingHorizontal:20,paddingVertical:20,borderRadius:20,borderWidth:2,borderColor:"#acacac"}} />
            </View>

            <View style={{display:"flex",flexDirection:"row",width:"100%",marginTop:"4%"}}>
            
            <View style={{width:"45%"}}>
            <Text style={{fontFamily:fontsLoaded?'Poppins_Regular':null, fontSize:16,marginBottom:4}}>Expiry number</Text>
            <TextInput placeholder="M M/Y Y" style={{paddingHorizontal:20,paddingVertical:20,borderRadius:20,borderWidth:2,borderColor:"#acacac",fontSize:16,width:"100%"}} />
            </View>

            <View style={{width:"45%",marginLeft:"5%"}}>
            <Text style={{fontFamily:fontsLoaded?'Poppins_Regular':null, fontSize:16,marginBottom:4}}>CVV</Text>
            <TextInput placeholder="123" style={{paddingHorizontal:20,paddingVertical:20,borderRadius:20,borderWidth:2,borderColor:"#acacac",fontSize:16,width:"100%"}} />
            </View>
            
            </View>

            <View style={{marginTop:18}}>
            <Text style={{fontFamily:fontsLoaded?'Poppins_Regular':null, fontSize:16,marginBottom:4}}>Country</Text>
            <TextInput placeholder="India" style={{paddingHorizontal:20,paddingVertical:20,borderRadius:20,borderWidth:2,borderColor:"#acacac",fontSize:16}} />
            </View>

            <View style={{marginTop:18}}>
            <Text style={{fontFamily:fontsLoaded?'Poppins_Regular':null, fontSize:16,marginBottom:4}}>Amount</Text>
            <TextInput placeholder="₹7000" style={{paddingHorizontal:20,paddingVertical:20,borderRadius:20,borderWidth:2,borderColor:"#acacac"}} />
            </View>

           <TouchableOpacity onPress={toggleModal2} style={{marginTop:40,flex:1,alignItems:"center",justifyContent:"center",borderRadius:20,backgroundColor:"#FE804D"}}>
           <Text style={{fontSize:20,color:"#fff"}}>Submit</Text>
           </TouchableOpacity>
           </View>
        </Modal>

            <View style={{marginTop:"2%",marginBottom:"2%",width:"90%",marginHorizontal:"auto",height:"37%",borderRadius:20,paddingHorizontal:10,backgroundColor:"#FE804D"}}>
              <Text style={{fontSize:29,fontWeight:"600",color:"#ffffff",paddingHorizontal:"4%",marginTop:"5%"}}>History</Text>
             <ScrollView persistentScrollbar={false}>
             <HistoryTransaction />
             <HistoryTransaction />
             <HistoryTransaction />
             <HistoryTransaction />
             <HistoryTransaction />
             <HistoryTransaction />
             </ScrollView>
            </View>
            </>
        )
      }

      {
        navi === "Learn" && (
            <>
            <Text style={{color:"#ffffff",fontSize:40,marginTop:20}}>Learn</Text>
            </>
        )
      }
      

      {
        navi === "Guideliness" && (
           <>
           <Text>lsmcckn</Text>
           </>
        )
      }


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
    },
    modal2:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})