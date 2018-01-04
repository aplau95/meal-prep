import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from '../Views/Home';
import GroceryList from '../Views/GroceryList';
import AddFood from '../Views/AddFood'

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },

  AddFood: {
    screen: AddFood,
    navigationOptions: {

    },
  },
})

export const RootTabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  GroceryList: {
    screen: GroceryList,
    navigationOptions: {
      title: 'Grocery List',
      tabBarLabel: 'Grocery List',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },

});
