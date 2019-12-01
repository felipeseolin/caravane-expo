import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Platform} from 'react-native';
import Constants from 'expo-constants';
// Screens/
import HomeScreen from './screens/HomeScreen';
import MyTripsScreen from './screens/MyTripsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SavedScreen from './screens/SavedScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';
// Icons
// import Teste from '../assets/home.svg';

const tabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Início',
    },
  },
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Buscar',
    },
  },
  MyTripsScreen: {
    screen: MyTripsScreen,
    navigationOptions: {
      tabBarLabel: 'Viagens',
    },
  },
  SavedScreen: {
    screen: SavedScreen,
    navigationOptions: {
      tabBarLabel: 'Salvos',
    },
  },
  ProfileScreen: {
    screen: createStackNavigator(
      {
        ProfileScreen,
        LoginScreen,
      }, {
        defaultNavigationOptions: {
          header: null,
        }
      },
    ),
    navigationOptions: {
      tabBarLabel: 'Usuário',
    },
  },
});

const stackNavigator = createStackNavigator(
  {
    HomeScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createSwitchNavigator({
  tabNavigator,
  stackNavigator,
});

export default Routes = createAppContainer(AppNavigator);
