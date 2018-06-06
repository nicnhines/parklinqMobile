import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import Exponent from 'expo';

import Splash from './app/screens/Splash';
import LoginHome from './app/screens/Login/LoginHome';
import Login from './app/screens/Login/Login';
import Registration from './app/screens/Login/Registration';
import MainMap from './app/screens/MainMap';
import { DrawerNav, LoginStackNav } from './app/config/router';

const DismissKeyboard = ({ children }) =>( 
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  {children}
  </TouchableWithoutFeedback>
)
export default class App extends Component {

  render() {
    return (
      <DismissKeyboard>
      <View style={styles.container}>
        <LoginStackNav />
      </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Exponent.Constants.statusBarHeight
  }
});
