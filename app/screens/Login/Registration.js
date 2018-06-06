import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class Registration  extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.socialLogin}>
          <Text style={{ color: '#39c1ef', fontSize:20 }}>Sign up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.socialLogin}>
          <Text style={{ color: '#39c1ef', fontSize: 20 }}>Sign up with Facebook</Text>
        </TouchableOpacity>
        <Text style={styles.textRegister}> ───────  Or  ───────</Text>
        
          <View style={styles.inputSection}>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='Email address'
              placeholderTextColor='white'
              autoCorrect={false}
              autoCapitalize={'none'}
              style={styles.input} />
          </View>
          <View style={styles.inputSection}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder='Password'
            placeholderTextColor='white'
            style={styles.input}
            secureTextEntry={true} />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: '#39c1ef', fontSize: 19 }}>Sign up with Email</Text>
          </TouchableOpacity>
          <View style={styles.terms}>
            <Text style={{color: 'white'}}>By creating an account. you agree to Parklinq's </Text>
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('Terms')}>
              <Text style={{color: 'white', textDecorationLine: 'underline'}}>Terms & Conditions.</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22a6b3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  socialLogin: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 55,
    margin: 15,
    width: 350,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 30
  }, 
  inputSection: {
    flexDirection: 'row',
    justifyContent: `center`,
    alignItems: `center`,
    height: 55,
    margin: 15,
    width: 350,
    borderColor: `white`,
    borderWidth: 2,
    borderStyle: `solid`,
    borderRadius: 30
  },
  input: {
    height: 40,
    width: 350,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  textRegister:{
    color: 'white',
    margin: 25,
    fontSize: 25
  },
  button: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 45,
    margin: 10,
    width: 300,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 30,
    marginTop: 30
  },
  terms: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
  }
});
