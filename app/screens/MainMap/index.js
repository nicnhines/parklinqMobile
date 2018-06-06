import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Platform, Alert } from 'react-native';
import  MapView, { Marker }  from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Modal from 'react-native-modal';

import googlePlacesKey from '../../config/apiKeys';

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

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
  state={
    modalVisible: false, 
    region: {
      latitude: 21.3069,
      longitude: -157.8583,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    ready: true,
    filteredMarkers: []
  };

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
  
  onRegionChange(region) {
    console.log('onRegionChange', region)
  }

  onRegionChangeComplete = (region) => {
    console.log('onRegionChangeComplete', region)
  }

  render() {
    const {region} = this.state;
    const {children, renderMarker, markers} = this.props;MapView
    return (
      <View style={styles.container}>
        <View style={styles.searchButton}>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
          }}>
            <Text>Current Location</Text>
          </TouchableHighlight>
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
                // fetchDetails={true}
                //renderDescription={row => row.description} 
                onPress={(data, details = null) => { 
                  console.log(data, details);
                }}
                getDefaultValue={() => ''}
                query={{
                  // available options: https://developers.google.com/places/web-service/autocomplete
                  key: 'AIzaSyBpDEjIY5zXibnvhk3rbMno4WE3UdPxAlw',
                  language: 'en', // language of the results
                  components: 'country:us'
                  // types: '(cities)' // default: 'geocode'
                }}
                styles={{
                  textInputContainer: {
                    width: '100%',
                    marginBottom: 10,
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
                    color: 'white'
                  }
                }} 
                currentLocation={true} // Will add a 'Current loregioncation' button at the top of the predefined places list
                // currentLocationLabel="CL"
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
                predefinedPlaces={[homePlace, workPlace]}
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
          onRegionChange={() => this.onRegionChange.bind(this)}
          onRegionChangeComplete={this.onRegionChangeComplete}
          renderMarker={renderMarker}
          onMapReady={this.onMapReady}
          showsMyLocationButton={false}
        >
          <Marker
            coordinate={{
              latitude: 21.2911,
              longitude: -157.8435
            }}
            title="Ala Moana" />
        </MapView>
      </View>
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
  searchButton: {
    flex: 1,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 510,
    height: 75,
    width: 370,
    borderStyle: 'solid',
    backgroundColor: 'white'
  },
  modal: {
    // marginTop: -550,
    // position: 'absolute'
  }
});
