import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Body, Text, Button } from 'native-base';

export default class PassesPage extends Component {

  render() {
    return (      
      <Container>
        <Header
          androidStatusBarColor="#22a6b3" 
          style={{ backgroundColor: "#22a6b3" }}>
          <Body style={styles.header}>
            <Title>Parking Passes</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.mainBody}>
          <View style={styles.view}>
            <Text style={styles.title}>
              Active Passes
            </Text>
            <Text style={styles.title}>
              Previous Bookings
            </Text>
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
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    color: '#808080',
    fontWeight: 'bold'
  }
})
