import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Splash  extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.logo}
          source={require('../../../assets/ParkLinq_Logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#22a6b3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 100,
    width: 300,
    marginBottom: 15,
    resizeMode: 'contain'
  }
});
