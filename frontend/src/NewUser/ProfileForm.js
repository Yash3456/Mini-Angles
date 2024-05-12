

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
  Pressable
} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const ProfileForm = ({navigation}) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const [checked,setChecked]= useState(false);
 const onSignup = () => {
    navigation.navigate("Documentform");
 }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1}}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={[defaultStyles.container,{paddingVertical:0}]}>
        <View style={styles.container}>
        <Text style={defaultStyles.header}>Tell us about yourself</Text>
        <Text style={defaultStyles.descriptionText}>
        Please fill all your required details.
        </Text>
        <View style={styles.inputContainer}>
         <TextInput placeholder='First name' style={{borderWidth:2,borderColor:"#1C1B1F80",marginVertical:10,paddingHorizontal:24,paddingVertical:15,borderRadius:20}} />
         <TextInput placeholder='Last name' style={{borderWidth:2,borderColor:"#1C1B1F80",marginVertical:10,paddingHorizontal:24,paddingVertical:15,borderRadius:20}} />
         <TextInput placeholder='Education' style={{borderWidth:2,borderColor:"#1C1B1F80",marginVertical:10,paddingHorizontal:24,paddingVertical:15,borderRadius:20}} />
         <TextInput placeholder='Your Employment type' style={{borderWidth:2,borderColor:"#1C1B1F80",marginVertical:10,paddingHorizontal:24,paddingVertical:15,borderRadius:20}} />
         <TextInput placeholder='Monthly' style={{borderWidth:2,borderColor:"#1C1B1F80",marginVertical:10,paddingHorizontal:24,paddingVertical:15,borderRadius:20}} />
         <TextInput placeholder='Annualy family income' style={{borderWidth:2,borderColor:"#1C1B1F80",marginVertical:10,paddingHorizontal:24,paddingVertical:15,borderRadius:20}} />
        </View>

        <View style={{flex:1,flexDirection:"row", alignItems:"flex-start",justifyContent:"flex-start",marginTop:"8%"}}>
        <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={() => setChecked(!checked)}>
        {checked && <Ionicons name="checkmark" size={24} color="white" />}
      </Pressable>
             <Text style={[defaultStyles.textLink,{color:"#1C1B1F",width:"90%",marginHorizontal:"4%",lineHeight:16}]}>I declare the above information is correct
             and true. I accept all the T&C mentioned on the page.</Text>
        </View>
        
<TouchableOpacity
style={[
  defaultStyles.pillButton,
  checked ? styles.enabled : styles.disabled,
  { marginBottom: 0,padding:0 },
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
    flexDirection: 'column',
    marginTop:16
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
    paddingVertical:20,
    marginTop:"16%",
    borderRadius:30,
    marginBottom:"3%",
    backgroundColor:"white"
  },
  account:{
    fontSize:16,
    marginBottom:20
  }, 
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 18,
  },

});
export default ProfileForm;

