import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Animated from 'react-native-reanimated';
import Splash from './src/NewUser/Splash';
import Intro from './src/NewUser/Intro';
import Form from './src/NewUser/Form';
import Page from './src/verification/verify';
import Verify from './src/verification/verify';
import ProfileForm from './src/NewUser/ProfileForm';
import DocumentForm from './src/NewUser/Documents';
import Home from './src/HomeScreen/Home';
import LoanAssistant from './src/components/LoanAssistant';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoanVerification from './src/verification/LoanVerified';
import * as LocalAuthentication from 'expo-local-authentication';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
   <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen
     name="Splash"
     component={Splash}
     options={{ headerShown: false }}
   />
   <Stack.Screen
     name="Mobile"
     component={Form}
     options={{ headerShown: false }}
   />
   <Stack.Screen
     name="Verify"
     component={Verify}
     options={{ headerShown: false }}
   />
   <Stack.Screen
     name="Profileform"
     component={ProfileForm}
     options={{ headerShown: false }}
   />
   <Stack.Screen
     name="Documentform"
     component={DocumentForm}
     options={{ headerShown: false }}
   />

   <Stack.Screen
   name="Home"
   component={Home}
   options={{ headerShown: false }}
 />

 <Stack.Screen
 name="Loan"
 component={LoanAssistant}
 options={{ headerShown: false }}
/>

<Stack.Screen
 name="VerifiedLoan"
 component={LoanVerification}
 options={{ headerShown: false }}
/>
   
 <Stack.Screen
     name="Guidliness"
     component={Intro}
     options={{ headerShown: false }}
   />
   

 </Stack.Navigator>
   </NavigationContainer>
   </GestureHandlerRootView>
  );
}