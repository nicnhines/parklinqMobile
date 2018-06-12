import React from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import MapView from 'react-native-maps';

const routes = ["Home", "SellParking", "Help", "Logout"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View
            style={{height:120}}>
          </View>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  style={{margin: 10}}
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFFF',
    zIndex: 30
  }
})