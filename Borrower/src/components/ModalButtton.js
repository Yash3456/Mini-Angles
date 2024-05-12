import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const ModalButtton = () => {
  return (
    <TouchableOpacity>
     <Image source={require("../../assets/google.png")} />
    </TouchableOpacity>
  );
}

export default ModalButtton;
