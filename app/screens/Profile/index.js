import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Container, Header, Title, Content, Body, Text, Button, Icon } from 'native-base';
export default class Profile extends Component {

  render() {
    return (
      <ScrollView>      
      <Container>
        <Header
          androidStatusBarColor="#22a6b3" 
          style={{ backgroundColor: "#22a6b3" }}>
          <Body style={styles.header}>
            <Title>My Profile</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.mainBody}>
          <TouchableOpacity style={styles.photoButton} >
            <Icon
              name="ios-image"
              style={{fontSize: 120, color: '#727272'}} /> 
          </TouchableOpacity>
          <Text style={{ fontSize: 13 }} >Tap To Edit your photo</Text>
          <View style={styles.inputSection}>
            <Text style={{marginLeft: 105}}>First Name</Text>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='First Name'
              placeholderTextColor='#727272'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCorrect={false}
              autoCapitalize={'none'}
              style={styles.input} />
          </View>
          <View style={styles.inputSection}>
          <Text style={{marginLeft: 105}}>Last Name</Text>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='Last Name'
              placeholderTextColor='#727272'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCorrect={false}
              autoCapitalize={'none'}
              style={styles.input} />
          </View>
          <View style={styles.inputSection}>
          <Text style={{marginLeft: 65}}>Email</Text>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='Email'
              placeholderTextColor='#727272'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCorrect={false}
              autoCapitalize={'none'}
              style={styles.input} />
          </View>
          <View style={styles.inputSection}>
          <Text style={{marginLeft: 75}}>Mobile</Text>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='Mobile'
              placeholderTextColor='#727272'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCorrect={false}
              autoCapitalize={'none'}
              style={styles.input} />
          </View>
          <TouchableOpacity style={styles.saveButton} >
            <Text style={{color:'white', fontSize:18 }}>
              save
            </Text>
          </TouchableOpacity>
        </Content>
      </Container>
      </ScrollView>    
    )
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainBody: {
    flex: 1,
    alignItems: 'center',
  
  },
  photoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 100
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 300,
    margin: 10,
    backgroundColor: '#22a6b3',
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
    borderRadius: 30,
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    width: 350,
    color: '#727272',
    fontSize: 19,
    alignSelf: 'center',
  }
})
