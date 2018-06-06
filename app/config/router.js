import React, { Component } from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import MainMap from '../screens/MainMap';
import Account from '../screens/Account';
import PassesPage from '../screens/Passes';
import LoginHome from '../screens/Login/LoginHome';
import Login from '../screens/Login/Login';
import Registration from '../screens/Login/Registration';
import Terms from '../screens/Login/TermsConditions';
import SellParkingPage from '../screens/SellParking/index';
import HelpPage from '../screens/Help/index';
import Profile from '../screens/Profile';
import MyVehicle from '../screens/Vehicles/MyVehicle'
import VehicleList from '../screens/Vehicles/VehicleList';
import DrawerNavigation from './DrawerNavigation';
import InnerStackNav from './DrawerNavigation';
import HomeScreenTabNavigator from './TabRoute';

//STACK NAVIGATOR FOR LOGIN TO HOME
export const LoginStackNav = new StackNavigator({
  LoginHome: {
    screen: LoginHome, 
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login, 
    navigationOptions: {
      header: null
    }
  },
  Registration: {
    screen: Registration, 
    navigationOptions: {
      header: null
    }
  },
  Terms: {
    screen: Terms,
    navigationOptions: {
      title: 'Terms & Conditions'
    }
  },
  HomeScreen: {
    screen: DrawerNavigation,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },
  MyVehicle: {
    screen: MyVehicle,
    navigationOptions: {
      header: null
    }
  },
  VehicleList: {
    screen: VehicleList,
    navigationOptions: {
      header: null
    }
  }
}, {
  navigationOptions: {
    gesturesEnabled: false
  }
}) 





