import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const CastelMarker = ({ text }) => <div style={{backgroundColor: 'white'}}>{text}</div>;

class InfoMap extends Component {
  static defaultProps = {
    center: {lat: 45.629, lng: 9.762},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <CastelMarker
          lat={45.629803}
          lng={9.76222}
          text={'CASTELLO'}
        />
      </GoogleMapReact>
    );
  }
}


export default InfoMap
