import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Body, Text, Button, Icon } from 'native-base';
export default class AccountPage extends Component {

  render() {
    return (      
      <Container>
        <Header
          androidStatusBarColor="#22a6b3" 
          style={{ backgroundColor: "#22a6b3" }}>
          <Body style={styles.header}>
            <Title>My Account</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.mainBody}>
          <View>
            <TouchableOpacity 
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Profile')} >
              <Icon 
                style={styles.icons}
                name='md-contact' />
              <Text>
                My Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('VehicleList')}
              style={styles.buttons} >
              <Icon
                style={styles.icons}
                name='ios-car'/>
              <Text>
                My Vehicles
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} >
              <Icon 
                style={styles.icons}
                name="md-card" />
              <Text>
                Payment Method
              </Text>
            </TouchableOpacity>
          </View>
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
    marginTop: 30
  },
  buttons: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 55,
    margin: 15,
    width: 350,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 30
  },
  icons: {
    color: '#22a6b3'
  }
})
