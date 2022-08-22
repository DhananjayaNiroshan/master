import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Explore, Home, Profile} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import img1 from '../Assets/images/icons8-home.gif'
import MainStack from './MainStack';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
