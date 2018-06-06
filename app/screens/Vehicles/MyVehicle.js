import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Container, Header, Title, Content, Body, Text, Button, Icon } from 'native-base';
export default class MyVehicle extends Component {

  render() {
    return (      
      <Container>
        <Header
          androidStatusBarColor="#22a6b3" 
          style={{ backgroundColor: "#22a6b3" }}>
          <Body style={styles.header}>
            <Title>My Vehicle</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.mainBody}>
          <View style={styles.inputSection}>
            <Text style={{marginLeft: 105}}>Year</Text>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='2013'
              placeholderTextColor='#727272'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCorrect={false}
              autoCapitalize={'none'}
              style={styles.input} />
          </View>
          <View style={styles.inputSection}>
          <Text style={{marginLeft: 105}}>Make</Text>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='Hyundai'
              placeholderTextColor='#727272'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCorrect={false}
              autoCapitalize={'none'}
              style={styles.input} />
          </View>
          <View style={styles.inputSection}>
          <Text style={{marginLeft: 65}}>Model</Text>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='Veloster'
              placeholderTextColor='#727272'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCorrect={false}
              autoCapitalize={'none'}
              style={styles.input} />
          </View>
          <View style={styles.inputSection}>
          <Text style={{marginLeft: 75}}>Color</Text>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='White'
              placeholderTextColor='#727272'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCorrect={false}
              autoCapitalize={'none'}
              style={styles.input} />
          </View>
          <View style={styles.inputSection}>
          <Text style={{marginLeft: 75}}>License Plate</Text>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='SFX 269'
              placeholderTextColor='#727272'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCorrect={false}
              autoCapitalize={'none'}
              style={styles.input} />
          </View>
          <TouchableOpacity style={styles.updateButton} >
            <Text style={{color:'white', fontSize:18 }}>
              Update
            </Text>
          </TouchableOpacity>
        </Content>
      </Container>    
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
  updateButton: {
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
