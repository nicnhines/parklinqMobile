import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Body, Text, Button, Icon, Left, Drawer, Right } from 'native-base';
import SideBar from '../../components/SideBar/SideBar';
export default class AccountPage extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  }; 

  render() {
    return (      
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<SideBar />}
      onClose={() => this.closeDrawer()} >
      <Container>
        <Header
          androidStatusBarColor="#22a6b3" 
          style={{ backgroundColor: "#22a6b3" }}>
          <Left style={{flex: 1}}>
          <Button
          transparent 
          style={{ backgroundColor: '#22a6b3'}}
          onPress={() => this.openDrawer()}
          >
          <Icon style={{fontSize: 40}} name='menu'/>
          </Button>
          </Left>
          <Body style={styles.header}>
            <Title style={{fontSize: 22}}>My Account</Title>
          </Body>
          <Right />
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
          </View>
        </Content>
      </Container>
      </Drawer>    
    )
  }
}

const styles = StyleSheet.create({
  header: {
    // justifyContent: 'center',
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
