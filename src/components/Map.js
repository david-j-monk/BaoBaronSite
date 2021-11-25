import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'


export class Map extends Component {
  static defaultProps = {
    center: {
      lat: 51.080304502888254,
      lng: 1.1797260572591322
    },
    zoom: 18
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={51.080304502888254}
            lng={1.1797260572591322}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map
