import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, Platform, Alert, Dimensions } from 'react-native';
import  MapView, { Marker }  from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Drawer, Icon } from 'native-base';
import Modal from 'react-native-modal';

import SideBar from '../../components/SideBar/SideBar';
import googlePlacesKey from '../../config/apiKeys';

const windowSize = Dimensions.get('window');
const deviceHeight = windowSize.height;
const deviceWidth = windowSize.width;

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;

const initialRegion = {
  latitude: 21.3069,
  longitude: -157.8583,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

export default class MainMap extends Component {
  map = null;
  constructor(props) {
    super(props);
    this.state={
      modalVisible: false, 
      mapRegion: null,
      latitude: 0,
      longitude: 0,
      ready: true
    };
  }
 
  // region: {
  //   latitude: 21.3069,
  //   longitude: -157.8583,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // },

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setRegion(region) {
    if(this.state.ready) {
      setTimeout(() => this.map.mapview.animateToRegion(region), 10);
    }
    //this.setState({region});
  }

  getCurrentPosition() {
    try{
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          };
          this.setRegion(region);
        },
      );
    } catch(e) {
      alert(e.message || "");
    }
  }

  onMapReady = (e) => {
    if(!this.state.ready) {
      this.setState({ready: true});
    }
  };

  
  getInitialState() {
    return {
      region: {
        latitude: 21.3069,
        longitude: -157.8583,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  
  onRegionChange(region, latitude, longitude ) {
    console.log('onRegionChange', region)
    this.setState ({
      mapRegion: region,
      latitude: latitude || this.state.latitude,
      longitude: longitude || this.state.longitude
    });
    console.log('lat', this.state.latitude)
    console.log('long', this.state.longitude)
  }

  onRegionChangeComplete = (region) => {
    console.log('onRegionChangeComplete', region)
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  }; 

  render() {
    const {region} = this.state;
    const {children, renderMarker, markers} = this.props;MapView
    return (
    <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar />}
        onClose={() => this.closeDrawer()} >
      <View style={styles.container}>
        <View style={styles.modalBar}>
          <TouchableOpacity 
            style={styles.drawerButton}
            onPress={() => this.openDrawer()}
          >
            <Icon style={styles.tabText} name='menu'/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.setModalVisible(true);
          }}>
            <Text style={{fontSize:16}}>Current Location</Text>
          </TouchableOpacity>
        </View>
          <Modal
            isVisible={this.state.modalVisible}
            style={styles.modal}
            avoidKeyboard={false}
          >
            <View style={styles.modalClose}>
              <TouchableOpacity
                style={{marginBottom: 0}}
                onPress={() => { this.setModalVisible(!this.state.modalVisible)}}>
                <Icon name='md-close' style={{color: '#FFF'}}/>
              </TouchableOpacity>
            </View>
            <View style={styles.searchBar}>
              <GooglePlacesAutocomplete
                minLength={2}
                autoFocus={false}
                returnKeyType={'search'} 
                listViewDisplayed='auto' 
                fetchDetails={true}
                renderDescription={row => row.description} 
                getDefaultValue={() => ''}
                query={{
                  // available options: https://developers.google.com/places/web-service/autocomplete
                  key: 'AIzaSyBpDEjIY5zXibnvhk3rbMno4WE3UdPxAlw',
                  language: 'en', 
                  components: 'country:us'
                }}
                currentLocation={false} 
                // currentLocationLabel="CL"
                onPress={(data, details = null) => { 
                  console.log(data, details);
                  const region = {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    latitudeDelta: 0.00922 * 1.5,
                    longitudeDelta: 0.00421 * 1.5
                  };
                  this.onRegionChange(region, region.latitude, region.longitude);
                }}
                styles={{
                  textInputContainer: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 50,
                    height: 50,
                    width: '100%'
                  },
                  description: {
                    fontWeight: 'bold'
                  },
                  listView: {
                    position: 'absolute',
                    height: deviceHeight,
                    width: deviceWidth,
                    marginTop: 60,
                  }
                }} 
                nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }}
                GooglePlacesSearchQuery={{
                  // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                  rankby: 'distance',
                  types: 'food'
                }}
                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                // predefinedPlaces={[homePlace, workPlace]}
                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                // renderRightButton={() => <Text onPress={() => { this.setModalVisible(!this.state.modalVisible)}}>X</Text>}
              />
            </View>
          </Modal>
          <MapView
            showsUserLocation
            ref={ map => {this.map = map}}
            style={styles.map}
            data={markers}
            initialRegion={initialRegion}
            onRegionChange={(regions) => {
              this.setState({
                mapRegion: regions
              });
            }}
            onPress = {(e) => {
              const region = {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5
              }
              this.onRegionChange (region, region.latitude, region.longitude);
            }}
            // onRegionChangeComplete={this.onRegionChangeComplete}
            // renderMarker={renderMarker}
            onMapReady={this.onMapReady}
            showsMyLocationButton={false}
          >
          <MapView.Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            title="Ala Moana" />
          </MapView>
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  },
  modalBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 510,
    height: 75,
    width: 370,
    borderStyle: 'solid',
    backgroundColor: 'white'
  },
  modalClose: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    // backgroundColor: 'red'
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 0,
    // marginBottom: 510,
    height: deviceHeight,
    width: 370,
    borderStyle: 'solid',
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 50,
  },
  drawerButton: {
    marginLeft: 10,
    marginRight: 20
  },
  searchButton: {
    width: 120
  },
  modal: {
    // marginTop: -550,
    position: 'absolute'
  }
});
