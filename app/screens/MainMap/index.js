import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, Platform, Alert } from 'react-native';
import  MapView, { Marker }  from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Drawer, Icon } from 'native-base';
import Modal from 'react-native-modal';

import SideBar from '../../components/SideBar/SideBar';
import googlePlacesKey from '../../config/apiKeys';

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
      latitude: null,
      longitude: null,
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
        <View style={styles.searchBar}>
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
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
          <Modal
            isVisible={this.state.modalVisible}
            style={styles.modal}
            avoidKeyboard={false}
          >
            <View style={styles.searchBar}>
              <GooglePlacesAutocomplete
                minLength={2}
                autoFocus={false}
                returnKeyType={'search'} 
                listViewDisplayed='auto' 
                fetchDetails={true}
                //renderDescription={row => row.description} 
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
                    width: '100%',
                  },
                  description: {
                    fontWeight: 'bold'
                  },
                  predefinedPlacesDescription: {
                    color: 'white',
                  },
                  listView: {
                    zIndex: 16,
                    position: 'absolute',
                    margin: 10,
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
                renderRightButton={() => <Text onPress={() => { this.setModalVisible(!this.state.modalVisible)}}>X</Text>}
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
              latitude: 21.2911,
              longitude: -157.8435
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
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 510,
    height: 75,
    width: 370,
    borderStyle: 'solid',
    backgroundColor: 'white'
  },
  drawerButton: {

  },
  searchButton: {
    
  },
  modal: {
    // marginTop: -550,
    // position: 'absolute'
  }
});
