import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Explore, Gallary, Home, Profile, Search} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'black' : 'black',
                }}
                source={imagePath.icProfile}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'black' : 'black',
                }}
                source={imagePath.icSea}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={navigationStrings.GALLARY}
        component={Gallary}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'black' : 'black',
                }}
                source={imagePath.icgal}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'black' : 'black',
                }}
                source={imagePath.icHome}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
