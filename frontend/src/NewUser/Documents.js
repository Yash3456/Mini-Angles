

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
  Pressable,
  Image
} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const DocumentForm = ({navigation}) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const [checked,setChecked]= useState(false);
 const onSignup = () => {
    navigation.navigate("Home");
 }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1}}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={[defaultStyles.container,{paddingVertical:0}]}>
        <View style={styles.container}>
        <Text style={defaultStyles.header}>upload Documents</Text>
        <Text style={defaultStyles.descriptionText}>
        Upload all the below required documents.
        </Text>
        <View style={styles.inputContainer}>
         <View style={{flex:1,flexDirection:"row",borderWidth:2,borderColor:"#1C1B1F80",paddingHorizontal:34,paddingVertical:40,borderRadius:20,alignItems:"center",marginVertical:10}}> 
        
         <View style={{width:"90%"}}>
         <Image source={require("../../assets/Frame1.png")} style={{width:120,height:56}} />
         </View>
         
         <Image source={require("../../assets/arrow_forward_ios.png")} style={{width:12,height:20}} />
         
         </View>
         <View style={{flex:1,flexDirection:"row",borderWidth:2,borderColor:"#1C1B1F80",paddingHorizontal:34,paddingVertical:40,borderRadius:20,alignItems:"center",marginVertical:10}}> 
         <View style={{width:"90%"}}>
         <Image source={require("../../assets/Frame2.png")} style={{width:170,height:56}} />
         </View>
         <Image source={require("../../assets/arrow_forward_ios.png")} style={{width:12,height:20}} />
         
         </View>
         <View style={{flex:1,flexDirection:"row",borderWidth:2,borderColor:"#1C1B1F80",paddingHorizontal:34,paddingVertical:40,borderRadius:20,alignItems:"center",marginVertical:10}}> 
         <View style={{width:"90%"}}>
         <Image source={require("../../assets/Frame3.png")} style={{width:190,height:56}} />
         </View>
         <Image source={require("../../assets/arrow_forward_ios.png")} style={{width:12,height:20}} />
         
         </View>
         <View style={{flex:1,flexDirection:"row",borderWidth:2,borderColor:"#1C1B1F80",paddingHorizontal:34,paddingVertical:40,borderRadius:20,alignItems:"center",marginVertical:10}}> 
         <View style={{width:"90%"}}>
         <Image source={require("../../assets/Frame4.png")} style={{width:150,height:56}} />
         </View>
         <Image source={require("../../assets/arrow_forward_ios.png")} style={{width:12,height:20}} />
         
         </View>
         <View style={{flex:1,flexDirection:"row",borderWidth:2,borderColor:"#1C1B1F80",paddingHorizontal:34,paddingVertical:40,borderRadius:20,alignItems:"center",marginVertical:10}}> 
         <View style={{width:"90%"}}>
         <Image source={require("../../assets/Frame5.png")} style={{width:180,height:56}} />
         </View>
         <Image source={require("../../assets/arrow_forward_ios.png")} style={{width:12,height:20}} />
         
         </View>
        </View>
        
<TouchableOpacity
style={[
  defaultStyles.pillButton,
  checked ? styles.enabled : styles.disabled,
  { marginBottom: 0,padding:0,marginTop:40 },
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
    marginTop:"20%",
    borderRadius:30,
    marginBottom:"8%",
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
export default DocumentForm;

