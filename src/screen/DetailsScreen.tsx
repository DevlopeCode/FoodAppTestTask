/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {FoodItemCard} from '../component/Card';

const DetailsScreen = ({route, navigation}: {route: any; navigation: any}) => {
  React.useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <FoodItemCard item={route.params} description onPress={() => {}} />
    </View>
  );
};

export default DetailsScreen;
