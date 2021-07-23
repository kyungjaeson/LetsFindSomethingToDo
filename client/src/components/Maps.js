import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import googleMapStyles from "../assets/GoogleMapsStyle";

export class Maps extends React.Component {
  render() {
    return this.props[0].map((index, val) => (
      <div
        style={{
          height: "420px",
          marginBottom: "80px",
          position: "relative",
          overflow: "hidden",
        }}
        key={val}
      >
        <h1>{index.Name}</h1>
        <Map
          google={this.props.google}
          zoom={15}
          styles={index.Style}
          initialCenter={{ lat: 39.1979, lng: -76.7625}}
        >
          <Marker position={{ lat: 39.1979, lng: -76.7625 }} />
        </Map>
      </div>
    ));
  }
}

Maps.defaultProps = googleMapStyles;

export default GoogleApiWrapper({
  apiKey: "AIzaSyB54lD_3Rfa6gMLVnzVzbxUI-zZfLWCDr8",
})(Maps);