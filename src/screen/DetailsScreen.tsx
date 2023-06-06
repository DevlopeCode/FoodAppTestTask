/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {FoodItemCard} from '../component/Card';

const DetailsScreen = ({route}: {route: any}) => {
  return (
    <View style={{flex: 1}}>
      <FoodItemCard item={route.params} description onPress={() => {}} />
    </View>
  );
};

export default DetailsScreen;
