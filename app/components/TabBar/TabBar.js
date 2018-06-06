import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {Text, Icon, Footer, FooterTab, Button } from 'native-base';
const routes = ["Home", "Chat", "Profile"];
export default class TabBar extends React.Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => this.props.navigation.navigate("MainMap")}>
            <Icon name="home" />
            <Text>HOME</Text>
        </Button>
        <Button
            vertical
            active={props.navigationState.index === 1}
            onPress={() => this.props.navigation.navigate("AccountPage")}>
            <Icon name="briefcase" />
            <Text>Account</Text>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 2}
            onPress={() => this.props.navigation.navigate("PassesPage")}>
            <Icon name="headset" />
            <Text>Passes</Text>
          </Button>
          <Button
          vertical
          >
          <Icon name='menu'/>
          <Text>MENU</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
