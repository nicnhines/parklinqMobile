import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Terms extends Component {

  render(){
    return (
      <View style={styles.container}>
        <Text>Terms and Conditions</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

