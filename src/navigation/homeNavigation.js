import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Home from '../screens/homeScreen';
import Category from '../screens/categoryScreen';
import SubCategory from '../screens/subCategoryScreen';
import Product from '../screens/productScreen';

const Stack = createStackNavigator ();

const homeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home', headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{title: 'Category', headerShown: false}}
      />
      <Stack.Screen
        name="SubCategory"
        component={SubCategory}
        options={{title: 'Sub Category', headerShown: false}}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{title: 'Product', headerShown: false}}
      />

    </Stack.Navigator>
  );
};

export default homeStack;
