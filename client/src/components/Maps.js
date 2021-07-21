import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import googleMapStyles from "../assets/GoogleMapsStyle";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Events from "./Events";



export class Maps extends React.Component {
  
  constructor(props) {
   
    super(props);
    this.state = {
      latA: [47.6740,47.9790],
      lngA: [-122.1215,-122.2021]
    };
  }

  render() {
    let latA = [47.6740,47.9790];
    let lngA = [-122.1215,-122.2021];
    let myid = document.getElementById('id')
    let latitude = document.getElementById('lat')
    // console.log(latitude)
    console.log(this.props.lat)
    return this.props[0].map((index, val) => (
      <section >
        <h1>{this.props.latArr}</h1>
        <div
          style={{
            height: "420px",
            marginBottom: "80px",
            position: "relative",
            overflow: "hidden",
          }}
          key={val}
        >
          {/* <h1>hello {this.props.lat}</h1> */}
          <h2> {index.Name}</h2>
         
          <Map
            google={this.props.google}
            zoom={15}
            styles={index.Style}
            initialCenter={{ lat: 47.6062, lng: -122.3321 }}
          >
            
            {latA.map((item,index)=>{
              // console.log(this.state.lngArr)
              return <Marker position={{lat: this.state.latA[index],lng: this.state.lngA[index]}} />
            })

            }
          
          
          </Map>
          
        </div>
        <Events location="Houston+TX"  />
      </section>
    ));
  }
}

Maps.defaultProps = googleMapStyles;

export default GoogleApiWrapper({
  apiKey: "AIzaSyB54lD_3Rfa6gMLVnzVzbxUI-zZfLWCDr8",
})(Maps);