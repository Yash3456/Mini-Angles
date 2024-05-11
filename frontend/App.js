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

function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{ width: 150, height: 150, backgroundColor: 'red' }}
        sharedTransitionTag="tag1"
      />
      <Button title="Screen2" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Screen3" onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Animated.View
        style={{ width: 100, height: 100, backgroundColor: 'green' }}
        sharedTransitionTag="tag1"
      />
      <Button title="Screen1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Screen3" onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
}

function Screen3({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{ width: 100, height: 100, backgroundColor: 'blue' }}
        sharedTransitionTag="tag1"
      />
      <Button title="Screen1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Screen2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}

export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen
     name="Screen1"
     component={Splash}
     options={{ headerShown: false }}
   />
   <Stack.Screen
     name="Screen2"
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