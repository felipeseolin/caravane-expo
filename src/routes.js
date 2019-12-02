import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
// Screens/
import HomeScreen from './screens/HomeScreen';
import MyTripsScreen from './screens/MyTripsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SavedScreen from './screens/SavedScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';
import AppInfoScreen from './screens/AppInfoScreen';
import CaravanaFormScreen from './screens/CaravanaFormScreen';
import MyCaravanasScreen from './screens/MyCaravanasScreen';
// Icons
// import Teste from '../assets/home.svg';

import color from './styles/color';

const defaultNavigationOptions = {
  title: 'Caravane',
  hearderTintColor: color.white,
  headerBackTitle: null,
  headerTintColor: color.white,
  headerStyle: {
    backgroundColor: color.blue,
    borderBottomWidth: 1,
    borderBottomColor: color.gray
  },
  headerTitleStyle: {
    color: color.white,
    fontSize: 16
  }
};

const tabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: createStackNavigator({
      HomeScreen,
    }, {defaultNavigationOptions}),
    navigationOptions: {
      tabBarLabel: 'Início'
    }
  },
  SavedScreen: {
    screen: createStackNavigator({
      SavedScreen: {
        screen: SavedScreen,
        navigationOptions: {
          title: 'Caravanas Salvas'
        }
      }
    }, { defaultNavigationOptions }),
    navigationOptions: {
      tabBarLabel: 'Salvos'
    }
  },
  ProfileScreen: {
    screen: createStackNavigator(
      {
        ProfileScreen: {
          screen: ProfileScreen,
          navigationOptions: {
            title: 'Meu perfil'
          }
        },
        LoginScreen: {
          screen: LoginScreen,
          navigationOptions: {
            title: 'Entrar'
          }
        },
        AppInfoScreen: {
          screen: AppInfoScreen,
          navigationOptions: {
            title: 'Informações'
          }
        },
        CaravanaFormScreen: {
          screen: CaravanaFormScreen,
          navigationOptions: ({ navigation }) => {
            if (navigation.state.params && navigation.state.params.caravana) {
              return {
                title: navigation.state.params.caravana.title
              };
            }

            return { title: 'Nova caravana' };
          }
        },
        MyCaravanasScreen: {
          screen: MyCaravanasScreen,
          navigationOptions: {
            title: 'Minhas caravanas'
          }
        }
      }, { defaultNavigationOptions }
    ),
    navigationOptions: {
      tabBarLabel: 'Usuário',
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: color.blue,
    inactiveTintColor: color.darkGray,
  },
});

const stackNavigator = createStackNavigator(
  {
    HomeScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppNavigator = createSwitchNavigator({
  tabNavigator,
  stackNavigator
});

export default Routes = createAppContainer(AppNavigator);
