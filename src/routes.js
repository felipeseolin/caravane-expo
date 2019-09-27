import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Screens
import HomeScreen from './screens/HomeScreen/HomeScreen';
import MyTripsScreen from './screens/MyTripsScreen/MyTripsScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import SavedScreen from './screens/SavedScreen/SavedScreen';
import SearchScreen from './screens/SearchScreen/SearchScreen';
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
    screen: ProfileScreen,
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
