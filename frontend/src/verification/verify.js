

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
} from 'react-native';

const Verify = ({navigation}) => {
  const [countryCode, setCountryCode] = useState([null,null,null,null]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const [selected, setselected]= useState(false);

 const onSignup = () => {
    navigation.navigate("Profileform");
 }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={defaultStyles.container}>
        <View style={styles.container}>
        <Text style={defaultStyles.header}>Enter Your Verification Code</Text>
        <Text style={defaultStyles.descriptionText}>
        Kindly provide the 4-digit OTP pin which is sent to your mobile number.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { borderColor: `${selected === true ? "#FE804D" : "black" }`}]}
            placeholderTextColor={Colors.gray}
            value={countryCode[0]}
            onChangeText={()=> setCountryCode[0]}
            onPress={()=> setselected(true)}
          /> 
          <TextInput
            style={[styles.input, { borderColor: `${selected === true ? "#FE804D" : "black" }`}]}
            placeholderTextColor={Colors.gray}
            value={countryCode[1]}
            onChangeText={()=> setCountryCode[1]}
            onPress={()=> setselected(true)}
          /> 
          <TextInput
            style={[styles.input, { borderColor: `${selected === true ? "#FE804D" : "black" }`}]}
            placeholderTextColor={Colors.gray}
            value={countryCode[2]}
            onChangeText={()=> setCountryCode[2]}
            onPress={()=> setselected(true)}
          /> 
          <TextInput
            style={[styles.input, { borderColor: `${selected === true ? "#FE804D" : "black" }`}]}
            placeholderTextColor={Colors.gray}
            value={countryCode[3]}
            onChangeText={()=> setCountryCode[3]}
            onPress={()=> setselected(true)}
          />
          
        </View>

        <View replace asChild style={{flex:1,flexDirection:"column", alignItems:"center"}}>
            <Text style={styles.account} >Didn't received the code? </Text>
             <Text style={[defaultStyles.textLink,{textDecorationLine:"underline"}]} onPress={()=> navigation.navigate("Splash")}>Resend Code</Text>
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignup}>
          <Text style={defaultStyles.buttonText}>Proceed</Text>
        </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: "white",
    borderWidth:1,
    padding: 14,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 15,
    width:"20%",
    textAlign:"center"
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
  container:{
    flex:1,
    paddingHorizontal:16,
    paddingVertical:25,
    marginTop:"16%",
    borderRadius:30,
    marginBottom:"10%",
    backgroundColor:"white"
  },
  account:{
    fontSize:16,
    marginBottom:20
  }
});
export default Verify;
