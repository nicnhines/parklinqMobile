import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class LoginHome  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.logo}
          source={require('../../../assets/ParkLinq_Logo.png')} />

          <TouchableOpacity 
            style={styles.buttonSignUp}
            onPress={() => this.props.navigation.navigate(`Registration`)}>
          <Text style={{ color: '#39c1ef', fontSize: 20 }}>Create an Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignIn}
            onPress={() => this.props.navigation.navigate(`Login`)}>
          <Text style={{ color: 'white', fontSize: 20 }}>Log In</Text>
        </TouchableOpacity>
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
  },
  buttonSignUp: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 50,
    margin: 15,
    width: 325,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 30
  },
  buttonSignIn: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 50,
    margin: 15,
    width: 325,
    borderColor: `white`,
    borderWidth: 2,
    borderStyle: `solid`,
    borderRadius: 30
  },
  buttonText: {
    alignSelf: 'center',
    color: '#22a6b3'
  }
});
