import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList, Animated, useWindowDimensions, PixelRatio} from 'react-native';
import { SkImage, makeImageFromView, Canvas, Circle, Group, Image, Mask } from "@shopify/react-native-skia";
import Slides from "../../data";
import Renderitem from '../components/renderitem';
import Custombutton from '../components/Custombutton';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import Pagination from '../components/Pagination';
import Modal from "react-native-modal";
import ModalButtton from '../components/ModalButtton';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

const Intro = ({ navigation }) => {

  // const [fontsLoaded, fontError] = useFonts({
  //   'Poppins': require('../assets/Fonts/Poppins/Poppins-Bold.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [currentIndex, setcurrentIndex] = useState(0);
  const buttonval = useSharedValue(0);
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const [overlay, setOverlay] = useState(null);
  const ref = useRef(null);
  const mask = useSharedValue(0);
  const pd = PixelRatio.get();
  const [active, setActive] = useState(false);

  const wait = async (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

  const handlerpress = async () => {
    if (currentIndex === Slides.length - 1) {
      console.log("ENd");
       navigation.navigate("Screen2");
      return;
    }

    if (!active) {
      setActive(true);

      const snapshot1 = await makeImageFromView(ref);
      setOverlay(snapshot1);
      await wait(80);

      setcurrentIndex(prev => prev + 1);
      mask.value = withTiming(SCREEN_HEIGHT, { duration: 1000 });
      buttonval.value = withTiming(buttonval.value + SCREEN_HEIGHT);
      await wait(1000);

      setOverlay(null);
      mask.value = 0;
      setActive(false);
    }
  };

  return (
    <View style={styles.container} >
      <View ref={ref} collapsable={false}>
        {
          Slides.map((item, index) => {
            return (
              currentIndex === index && <Renderitem item={item} key={index} />
            )
          })
        }
      </View>

      {overlay && (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents={'none'}>
          <Mask
            mode="luminance"
            mask={
              <Group>
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 160}
                  r={SCREEN_HEIGHT}
                  color="white"
                />
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 160}
                  r={mask}
                  color="black"
                />
              </Group>
            }>
            <Image
              image={overlay}
              x={0}
              y={0}
              width={overlay.width() / pd}
              height={overlay.height() / pd}
            />
          </Mask>
        </Canvas>
      )}
      {
        /*
        <Pagination data={Slides} buttonVal={buttonval} />   (this is the code for fluid pagination)
        */
      }

      <Custombutton handlePress={handlerpress} buttonVal={buttonval} />

      <Modal style={styles.modal} isVisible={isModalVisible} animationInTiming={1000}>
        <View>
          <Text style={styles.text}>Sign Up</Text>
         <ModalButtton />
        </View>
      </Modal>

    </View>
  );
}

export default Intro;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#164938"
  },
  modal: {
    backgroundColor: "white",
    marginHorizontal: "auto",
    width: "98%",
    maxHeight: "40%",
    flex:1,
    alignItems:"center",
    justifyContent:"flex-start",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: "58%",
    paddingVertical:20
  },
  text: {
    fontWeight: "600",
    fontSize: 30,
    textAlign: "center",
  },
  google:{
    marginVertical:30,
    borderWidth:2,
    borderColor:"#acacac",
    paddingHorizontal:40,
    paddingVertical:30,
    borderRadius:50
  }
})