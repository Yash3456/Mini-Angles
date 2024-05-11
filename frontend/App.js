import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Animated from 'react-native-reanimated';
import Splash from './src/Splash';
import Intro from './src/Intro';
import Form from './src/Form';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
   
 {
  /**
   *<Stack.Screen
     name="Screen3"
     component={Intro}
     options={{ headerShown: false }}
   />
   * 
   */
 }

 </Stack.Navigator>
   </NavigationContainer>
  );
}