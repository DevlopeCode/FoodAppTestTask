import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService, {navigationRef} from './NavigationService';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from '../screen/ListScreen';
import DetailsScreen from '../screen/DetailsScreen';

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
      })}>
      <Stack.Screen name={'ListScreen'} component={ListScreen} />
      <Stack.Screen name={'DetailsScreen'} component={DetailsScreen} />
    </Stack.Navigator>
  );
}
