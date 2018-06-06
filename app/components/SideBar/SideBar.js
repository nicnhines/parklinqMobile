import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import MapView from 'react-native-maps';

const routes = ["Home", "Sell Parking", "Help"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
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
    backgroundColor:'#FFFF'
  }
})