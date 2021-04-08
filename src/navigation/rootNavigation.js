import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createMaterialBottomTabNavigator,
} from '@react-navigation/material-bottom-tabs';

import AboutScreen from '../screens/aboutScreen';
import HomeStack from './homeNavigation';
import DataTopTab from './dataNavigation'

import HomeIcon from 'react-native-vector-icons/AntDesign';
import DataIcon from 'react-native-vector-icons/Feather';
import {COLORS} from '../constants/colors';

const Tab = createMaterialBottomTabNavigator ();

const RootNavigation = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <DataIcon
                name="info"
                color={focused ? COLORS.white : COLORS.black}
                size={25}
              />
            ),
            tabBarColor: COLORS.grayBlue,
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) => (
              <HomeIcon
                name="home"
                color={focused ? COLORS.white : COLORS.black}
                size={25}
              />
            ),
            tabBarColor: COLORS.teal,
          }}
        />

        <Tab.Screen
          name="Data"
          component={DataTopTab}
          options={{
            tabBarIcon: ({focused}) => (
              <DataIcon
                name="database"
                color={focused ? COLORS.white : COLORS.black}
                size={25}
              />
            ),
            tabBarColor: COLORS.lightblue,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
