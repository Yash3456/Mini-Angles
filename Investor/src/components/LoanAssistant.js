
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
import Budget from './Slider';
const LoanAssistant = ({navigation}) => {
  const [Period, setPeriod] = useState('');
  const [amount, setamount] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const [selected, setselected]= useState(false);

 const onSignup = () => {
    navigation.navigate("Home");
 }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={defaultStyles.container}>
        <View style={styles.container}>
        <Text style={defaultStyles.header}>Loan Application</Text>
        <Text style={defaultStyles.descriptionText}>
        Please select a range of amount you want to take it as a loan
        </Text>
        <Text style={{fontSize:20,marginTop:18.84,marginLeft:10}}>Amount</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter you amount..."
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={amount}
            onChangeText={setamount}
          />
        </View>

        <Budget/>

        <Text style={{fontSize:20,marginTop:18.84,marginLeft:10}}>Period</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter duration of the loan ..."
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={Period}
            onChangeText={setPeriod}
          />
        </View>


        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            amount !== "₹10,000" ? styles.enabled : styles.disabled,
            { marginTop:30,width:"70%",marginHorizontal:"auto" },
          ]}
          onPress={()=> navigation.navigate("VerifiedLoan")}>
          <Text style={defaultStyles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{fontSize:15,fontWeight:"600"}}
        onPress={onSignup}>
        <Text style={[defaultStyles.buttonText,{color:"#000",marginHorizontal:"auto",marginTop:20}]}>Cancel</Text>
      </TouchableOpacity>
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
    paddingHorizontal:16,
    paddingVertical:25,
    marginTop:"16%",
    borderRadius:30,
    marginBottom:"10%",
    backgroundColor:"white"
  },
  account:{
    fontSize:16
  }
});
export default LoanAssistant;
