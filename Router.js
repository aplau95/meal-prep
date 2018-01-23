import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Mealplan from '../Views/Mealplan';
import GroceryList from '../Views/GroceryList';
import AddFood from '../Views/AddFood'
import Recipes from '../Views/Recipes'
import Settings from '../Views/Settings'
import Meal from '../Views/Meal'
import CalMacroGoal from '../Views/CalMacroGoal'
import Profile from '../Views/Profile'


export const MealPlanStack = StackNavigator({
  Mealplan: {
    screen: Mealplan,
    navigationOptions: {
      title: 'Meal Plan',
    },
  },

  Meal: {
    screen: Meal,
    navigationOptions: {

    },
  },
})

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },

  CalMacroGoal: {
    screen: CalMacroGoal,
    navigationOptions: {
      title: 'Calories and Macronutrient Goals',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {

    },
  },
})

export const RootTabs = TabNavigator({
  Mealplan: {
    screen: MealPlanStack,
    navigationOptions: {
      tabBarLabel: 'Meal Plan',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-restaurant' : 'ios-restaurant-outline'}
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
          name={focused ? 'ios-list-box' : 'ios-list-box-outline'}
          size={30}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  AddFood: {
    screen: AddFood,
    navigationOptions: {
      title: 'Add Food',
      tabBarLabel: 'Add Food',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Recipes: {
    screen: Recipes,
    navigationOptions: {
      title: 'Recipes',
      tabBarLabel: 'Recipes',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-nutrition' : 'ios-nutrition-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      title: 'Settings',
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-pulse' : 'ios-pulse-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});
