import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import googleMapStyles from "../assets/GoogleMapsStyle";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export class Maps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      latArr: [47.6740,47.9790],
      lngArr: [-122.1215,-122.2021]
    };
  }

  render() {
    let latArr = [47.6740,47.9790];
    let lngArr = [-122.1215,-122.2021];
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
          initialCenter={{ lat: 47.6062, lng: -122.3321 }}
        >
          
          {latArr.map((item,index)=>{
            console.log(this.state.lngArr)
            return <Marker position={{lat: this.state.latArr[index],lng: this.state.lngArr[index]}} />
          })

          }
        
        
        </Map>
      </div>
    ));
  }
}

Maps.defaultProps = googleMapStyles;

export default GoogleApiWrapper({
  apiKey: "AIzaSyB54lD_3Rfa6gMLVnzVzbxUI-zZfLWCDr8",
})(Maps);