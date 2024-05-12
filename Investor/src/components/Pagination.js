import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SharedValue} from 'react-native-reanimated';
import Slides from '../../data';
import Dot from './Dots';

const Pagination = ({data, buttonVal}) => {
  return (
    <View style={styles.paginationContainer}>
      {Slides.map((_, index) => {
        return <Dot index={index} buttonVal={buttonVal} key={index} />;
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 140,
  },
});