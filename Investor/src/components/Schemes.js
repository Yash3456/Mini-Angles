
import Colors from '../../constants/Colors';
import { defaultStyles } from '../../constants/Styles';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import SchemesCard from './SchemesCard';
import { ScrollView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Modal from 'react-native-modal';

const Schemes = ({navigation}) => {
  const [Period, setPeriod] = useState('');
  const [amount, setamount] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const [selected, setselected]= useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_Regular: require('../../assets/Fonts/Poppins/Poppins-Regular.ttf'),
    Poppins_Medium: require('../../assets/Fonts/Poppins/Poppins-Medium.ttf'),
    Poppins_Bold: require('../../assets/Fonts/Poppins/Poppins-Bold.ttf'),
    Poppins_SemiBold: require('../../assets/Fonts/Poppins/Poppins-SemiBold.ttf'),
    Pacifio_Regular: require('../../assets/Fonts/Pacifico/Pacifico-Regular.ttf')        
});

 const Loansuccess = () => {
  navigation.navigate("Home");
 }

 const [isModalVisible2, setModalVisible2] = useState(false);

 const toggleModal2 = () => {
     setModalVisible2(!isModalVisible2);
 };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={defaultStyles.container}>
        <View style={styles.container}>
        <Text style={defaultStyles.header}>Schemes</Text>
        <Text style={defaultStyles.descriptionText}>
        Please select the scheme which will help you in loan sanctioning
        </Text>

        <ScrollView style={{paddingHorizontal:10,marginTop:10}} showsVerticalScrollIndicator={false}>
          <SchemesCard title={"Low"} val={12} toggleModal2={toggleModal2}/>
          <SchemesCard title={"Medium"} val={15} toggleModal2={toggleModal2}/>
          <SchemesCard title={"High"} val={22} toggleModal2={toggleModal2}/>
        </ScrollView>

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

        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: "white",
    borderWidth:1,
    padding: 20,
    borderRadius: 16,
    fontSize: 15,
    marginRight: 10,
    width:"25%"
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
  container:{
    flex:1,
    paddingHorizontal:8,
    paddingVertical:15,
    marginTop:"10%",
    borderRadius:30,
    marginBottom:"10%",
    backgroundColor:"white"
  },
  account:{
    fontSize:16
  }
});
export default Schemes;
