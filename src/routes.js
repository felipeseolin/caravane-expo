import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from  '@expo/vector-icons';
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
import CaravanaDetailsScreen from './screens/CaravanaDetailsScreen';
import CaravanaTripFormScreen from './screens/CaravanaTripFormScreen';
import TripDetailsScreen from './screens/TripDetailsScreen';
import PassengersScreen from './screens/PassengersScreen';
// Icons
import HomeIcon from '../assets/icons/home.svg';
import UserIcon from '../assets/icons/user.svg';
import SaveIcon from '../assets/icons/save.svg';

import color from './styles/color';

const defaultNavigationOptions = {
  title: 'Caravane',
  hearderTintColor: color.white,
  headerBackTitle: null,
  headerTintColor: color.white,
  headerStyle: {
    backgroundColor: color.blue,
    borderBottomWidth: 1,
    borderBottomColor: color.gray,
  },
  headerTitleStyle: {
    color: color.white,
    fontSize: 16,
  },
};

const tabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: createStackNavigator({
      HomeScreen,
      CaravanaDetailsScreen: {
        screen: CaravanaDetailsScreen,
        navigationOptions: ({ navigation }) => {
          if (navigation.state.params && navigation.state.params.caravana) {
            return {
              title: navigation.state.params.caravana.title,
            };
          }

          return { title: 'Caravana' };
        },
      },
      CaravanaTripFormScreen: {
        screen: CaravanaTripFormScreen,
        navigationOptions: ({ navigation }) => {
          if (navigation.state.params && navigation.state.params.caravana) {
            return {
              title: navigation.state.params.caravana.title,
            };
          }

          return { title: 'Caravana' };
        },
      },
    }, { defaultNavigationOptions }),
    navigationOptions: {
      tabBarLabel: 'Início',
      tabBarIcon: ({ focused }) => (
        <HomeIcon fill={focused ? color.blue : color.darkGray} height={18} />
      ),
    },
  },
  MyTripsScreen: {
    screen: createStackNavigator({
      MyTripsScreen: {
        screen: MyTripsScreen,
        navigationOptions: {
          title: 'Minhas viagens',
        },
      },
      TripDetailsScreen: {
        screen: TripDetailsScreen,
        navigationOptions: ({ navigation }) => {
          if (navigation.state.params && navigation.state.params.caravana) {
            return {
              title: navigation.state.params.caravana.title,
            };
          }

          return { title: 'Caravana' };
        },
      },
      CaravanaTripFormScreen: {
        screen: CaravanaTripFormScreen,
        navigationOptions: ({ navigation }) => {
          if (navigation.state.params && navigation.state.params.caravana) {
            return {
              title: navigation.state.params.caravana.title,
            };
          }

          return { title: 'Caravana' };
        },
      },
    }, { defaultNavigationOptions }),
    navigationOptions: {
      tabBarLabel: 'Viagens',
      tabBarIcon: ({ focused }) => (
        <MaterialIcons name="directions-bus" size={24} color={focused ? color.blue : color.darkGray} />
      ),
    },
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
            title: 'Minhas caravanas',
          },
        },
        PassengersScreen: {
          screen: PassengersScreen,
          navigationOptions: ({ navigation }) => {
            if (navigation.state.params && navigation.state.params.caravana) {
              return {
                title: navigation.state.params.caravana.title
              };
            }

            return { title: 'Caravana' };
          },
        },
      }, { defaultNavigationOptions }
    ),
    navigationOptions: {
      tabBarLabel: 'Usuário',
      tabBarIcon: ({ focused }) => (
        <UserIcon fill={focused ? color.blue : color.darkGray} height={18}/>
      ),
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: color.blue,
    inactiveTintColor: color.darkGray
  }
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
