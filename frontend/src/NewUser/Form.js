
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
const Page = ({navigation}) => {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const [selected, setselected]= useState(false);

 const onSignup = () => {
    navigation.navigate("Verify");
 }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={defaultStyles.container}>
        <View style={styles.container}>
        <Text style={defaultStyles.header}>Continue With Phone number</Text>
        <Text style={defaultStyles.descriptionText}>
        Provide your phone number. We will send you confirmation code.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { borderColor: `${selected === true ? "#FE804D" : "black" }`}]}
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
            onPress={()=> setselected(true)}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mobile number"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View replace asChild>
            <Text style={styles.account} >Already have an account? <Text style={defaultStyles.textLink} onPress={()=> navigation.navigate("Splash")}>Log in</Text></Text>
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignup}>
          <Text style={defaultStyles.buttonText}>Sign up</Text>
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
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
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
export default Page;
