import React, { Component } from 'react';
import {
  Button,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  View
} from 'react-native';
import mainStyle from './../../res/styles'
import Footer from './../../components/Footer/Footer'
import colors from './../../res/colors'
import style from './Tracker.style'
import Geolocation from 'react-native-geolocation-service';
import MapView, { PROVIDER_GOOGLE, Circle } from "react-native-maps";

export default class Tracker extends Component {
  watchId = null;
  LATITUDE_DELTA = 0.009;
  LONGITUDE_DELTA = 0.009;
  LATITUDE = 18.7934829;
  LONGITUDE = 98.9867401;
  state = {
    loading: false,
    location: {
      latitude: 0,
      longitude: 0,
      heading: 0,
      timestamp: 0,
      accuracy: 0,
    }
  };

  componentDidMount(){
    this.getLocationUpdates()
  }

  hasLocationPermission = async () => {
    if (Platform.OS === 'ios' ||
      (Platform.OS === 'android' && Platform.Version < 23)) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  }

  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        (position) => {
          this.setState({ location: position, loading: false });
          console.log(position);
        },
        (error) => {
          this.setState({ location: error, loading: false });
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50, forceRequestLocation: true }
      );
    });
  }

  getLocationUpdates = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState(() => {
      this.watchId = Geolocation.watchPosition(
        (position) => {
          this.setState({ 
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              heading: position.coords.heading,
              timestamp: position.timestamp,
              accuracy: position.coords.accuracy,
            }
          });
        },
        (error) => {
          this.setState({ location: error });
          console.log(error);
        },
        { enableHighAccuracy: true, distanceFilter: 0, interval: 5000, fastestInterval: 2000 }
      );
    });
  }

  removeLocationUpdates = () => {
    if (this.watchId !== null) {
      Geolocation.clearWatch(this.watchId);
      this.setState({ updatesEnabled: false })
    }
  }

  getMapRegion = () => {
    console.log(this.state.location);
    let latitude = this.state.location.latitude != null ? this.state.location.latitude : -6.914744;
    let longitude = this.state.location.longitude != null ? this.state.location.longitude : 107.609810;

    return {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: this.LATITUDE_DELTA,
      longitudeDelta: this.LONGITUDE_DELTA
    }
  }

  render() {
    console.log(this.getMapRegion());
    
    return (
      <View style={mainStyle.container}>
        <MapView 
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: -6.914744,
            longitude: 107.609810,
            latitudeDelta: this.LATITUDE_DELTA,
            longitudeDelta: this.LONGITUDE_DELTA
          }}
          region={this.getMapRegion()}>
            <Circle
              center={this.getMapRegion()}
              radius={this.state.location.accuracy}
              strokeColor='transparent'
              fillColor='rgba(135, 206, 235, .25)'
            />
          </MapView>
        <Footer />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 12
  },
  result: {
      borderWidth: 1,
      borderColor: '#666',
      width: '100%',
      paddingHorizontal: 16
  },
  buttons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 12,
      width: '100%'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
