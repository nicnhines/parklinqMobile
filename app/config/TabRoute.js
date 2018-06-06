import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import {Text, Icon, Footer, FooterTab, Button, Drawer , Container, Content} from 'native-base';

import MainMap from '../screens/MainMap';
import AccountPage from '../screens/Account';
import PassesPage from '../screens/Passes';
import SideBar from '../components/SideBar/SideBar';
// import DrawerNavigation from "./DrawerNavigation";
// TAB NAVIGATOR
// class TabNav extends Component {

//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerLeft: (
//         <View style={{ padding: 10, flex: 1 }}>
//           <Ionicons name="md-menu" onPress={() => navigation.navigate('DrawerOpen')} />
//           <Button style={styls} title="open says me" />
//         </View>
//       )
//     }
//   }
//   render() {
//     return(
//       <Tabs />
//     )
//   }
// }

//  export const Tabs = new TabNavigator({
//   MainMap: {
//     screen: MainMap,
//     navigationOptions: {
//       tabBarLabel: 'HOME',
//       tabBarIcon: ({focused, tintColor }) => (
//         <Ionicons name="md-compass" size={24} />
//       ) 
//     }
//   },
//   Account: {
//     screen: Account,
//     navigationOptions: {
//       tabBarLabel: 'ACCOUNT',
//       tabBarIcon: () => (
//         <Ionicons name="contact" size={24} />
//       ) 
//     }
//   },
//   PassesPage: {
//     screen: PassesPage,
//     navigationOptions: {
//       tabBarLabel: 'PASSES',
//       tabBarIcon: () => (
//         <Ionicons name="md-compass" size={24} />
//       ) 
//     }
//   },
// },{
//   tabBarPosition: 'bottom'
// });

// class TabBar extends Component{
  // constructor(props) {
  //   super(props)
  // }

  // render() {
  //   return(
  //     <Footer>
  //     <FooterTab>
  //       <Button
  //         vertical
  //         active={props.navigationState.index === 0}
  //         onPress={() => props.navigation.navigate("MainMap")}>
  //         <Icon name="home" />
  //         <Text>HOME</Text>
  //     </Button>
  //     <Button
  //         vertical
  //         active={props.navigationState.index === 1}
  //         onPress={() => props.navigation.navigate("AccountPage")}>
  //         <Icon name="briefcase" />
  //         <Text>Account</Text>
  //       </Button>
  //       <Button
  //         vertical
  //         active={props.navigationState.index === 2}
  //         onPress={() => props.navigation.navigate("PassesPage")}>
  //         <Icon name="headset" />
  //         <Text>Passes</Text>
  //       </Button>
  //       <Button
  //       vertical
  //       >
  //       <Icon name='menu'/>
  //       <Text>MENU</Text>
  //       </Button>
  //     </FooterTab>
  //   </Footer>
  //   )
  // }

//}


const HomeScreenTabNavigator = TabNavigator({
  MainMap: { screen: MainMap },
  AccountPage: { screen: AccountPage },
  PassesPage: { screen: PassesPage }
  },{
  tabBarPosition: 'bottom',
  tabBarComponent: props => {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    }; 
    return (
      // <Drawer
      //   ref={(ref) => { this.drawer = ref; }}
      //   content={<SideBar />}
      //   onClose={() => this.closeDrawer()} >
      //   <Container>
      //   <Content>
        
      //   </Content>
        
      <Footer>
        <FooterTab style={styles.tabs}>
          <Button 
            vertical
            // active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("MainMap")}>
            <Icon style={styles.tabText} name="ios-search" />
            <Text style={styles.tabText}>PARKING</Text>
        </Button>
        <Button 
            vertical
            // active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate("AccountPage")}>
            <Icon style={styles.tabText} name="md-contact" />
            <Text style={styles.tabText}>Account</Text>
          </Button>
          <Button 
            vertical
            // active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate("PassesPage")}>
            <Icon style={styles.tabText} name="md-pricetag" />
            <Text style={styles.tabText}>Passes</Text>
          </Button>
          {/*<Button 
          vertical
          active={props.navigationState.index === 3}
          onPress={() => this.openDrawer()}
          >
          <Icon style={styles.tabText} name='menu'/>
          <Text style={styles.tabText}>MENU</Text>
          </Button>*/}
        </FooterTab>
      </Footer>
      //  </Container>
      //  </Drawer>
    )
  } 
});

const styles = StyleSheet.create ({
  tabs: {
    backgroundColor: '#FFF',
  },
  tabText: {
    color: '#727272'
  }
})

export default HomeScreenTabNavigator;