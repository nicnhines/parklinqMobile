import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Body, Text, Button, Icon } from 'native-base';
export default class VehicleList extends Component {

  render() {
    return (      
      <Container>
        <Header
          androidStatusBarColor="#22a6b3" 
          style={{ backgroundColor: "#22a6b3" }}>
          <Body style={styles.header}>
            <Title>Vehicle List</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.mainBody}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MyVehicle')}
              style={styles.buttons} >
              <Icon
                style={styles.icons}
                name='ios-car'/>
              <Text>
                My Vehicles
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
