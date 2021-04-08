import React from 'react';
import 'react-native-gesture-handler';
import {
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import ApiScreen from '../screens/apiResponseScreen';
import SavedDataScreen from '../screens/savedDataScreen';

const TopTab = createMaterialTopTabNavigator ();

const DataTopTab = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="ApiScreen"
        component={ApiScreen}
        options={{
          tabBarLabel: 'API Response',
        }}
      />
      <TopTab.Screen
        name="SavedDataScreen"
        component={SavedDataScreen}
        options={{
          tabBarLabel: 'Saved Data',
        }}
      />
    </TopTab.Navigator>
  );
};

export default DataTopTab;
