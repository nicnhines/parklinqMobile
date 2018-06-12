import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import MainMap from '../screens/MainMap/index';
import SellParkingPage from '../screens/SellParking/index';
import HelpPage from '../screens/Help/index';
import HomeScreenTabNavigator from './TabRoute';
import SideBar from '../components/SideBar/SideBar';

const InnerStackNav = new StackNavigator({
  TabNavigator: {
    screen: HomeScreenTabNavigator,
    navigationOptions: {
      header: null,
    }
  }
})


const DrawerNavigation = DrawerNavigator({
  Home: { screen: InnerStackNav },
  SellParking: { screen: SellParkingPage },
  Help: { screen: HelpPage }
},{
  contentComponent: props => <SideBar {...props} />
  }
)

export default DrawerNavigation;