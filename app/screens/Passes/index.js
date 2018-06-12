import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Body, Text, Button, Left, Drawer, Icon, Right } from 'native-base';
import SideBar from '../../components/SideBar/SideBar';
export default class PassesPage extends Component {

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
          onPress={() => this.openDrawer()}
          >
          <Icon style={{fontSize: 40}} name='menu'/>
          </Button>
          </Left>
          <Body style={styles.header}>
            <Title style={{fontSize: 19}}>Parking Passes</Title>
          </Body>
          <Right />
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
      </Drawer>
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
