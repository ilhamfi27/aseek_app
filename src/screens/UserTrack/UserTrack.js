import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { connect } from 'react-redux'
import mainStyle from '../../res/styles'
import Footer from '../../components/Footer/Footer'
import style from './UserTrack.style'
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

class UserTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {
        latitude: this.LATITUDE,
        longitude: this.LONGITUDE,
      }
    }
  }

  LATITUDE_DELTA = 0.009;
  LONGITUDE_DELTA = 0.009;
  LATITUDE = -6.914744;
  LONGITUDE = 107.609810;

  componentDidMount() {
    this.getLocationState()
  }

  componentDidUpdate() {}

  studentLocationIsset() {
    const location = this.props.student.location
    let emptyObject = Object.keys(location).length === 0 && location.constructor === Object
    return !emptyObject
  }

  getLocationState(){
    console.log(this.props.student.location);
  }

  getLatLng(){
    return {
      ...this.state.location
    }
  }

  getMapRegion() {
    const {latitude, longitude} = this.getLatLng()
    return {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      latitudeDelta: this.LATITUDE_DELTA,
      longitudeDelta: this.LONGITUDE_DELTA
    }
  }

  getMarkerLocation() {
    const {latitude, longitude} = this.getLatLng()
    return {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    }
  }

  render() {
    return (
      <View style={mainStyle.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={style.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: -6.914744,
            longitude: 107.609810,
            latitudeDelta: this.LATITUDE_DELTA,
            longitudeDelta: this.LONGITUDE_DELTA
          }}
          region={this.getMapRegion()}
        >
          <Marker 
            coordinate={this.getMarkerLocation()}
          />
        </MapView>
        <Footer />
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
    ui: state.ui,
    student: state.student
  }
}

export default connect(mapStateToProps, null)(UserTracker)
