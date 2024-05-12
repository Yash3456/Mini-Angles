
import Colors from '../../constants/Colors';
import { defaultStyles } from '../../constants/Styles';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

const LoanVerification = ({navigation}) => {
  const [Period, setPeriod] = useState('');
  const [amount, setamount] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const [selected, setselected]= useState(false);

  useEffect(()=>{

    setTimeout(()=>{
         navigation.navigate("Home");
    },1000);

  },[]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={defaultStyles.container}>
        <View style={styles.container}>
          <Image source = {require("../../assets/sucessfulloan.png")} style={{width:"90%",height:"44%"}} />

          <Text style={{marginTop:"20%",fontSize:40,fontWeight:"600"}}>Loan Approved</Text>
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
    marginTop:"16%",
    borderRadius:30,
    marginBottom:"10%",
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center"
  },
  account:{
    fontSize:16
  }
});
export default LoanVerification;
