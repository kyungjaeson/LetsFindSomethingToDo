import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import React from "react";
import googleMapStyles from "../assets/GoogleMapsStyle";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBTooltip } from 'mdb-react-ui-kit';


// const map = document.getElementById("map");
// const contentString =
// '<div id="content">' +
// '<div id="siteNotice">' +
// "</div>" +
// '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
// '<div id="bodyContent">' +
// "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
// "sandstone rock formation in the southern part of the " +
// "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
// "south west of the nearest large town, Alice Springs; 450&#160;km " +
// "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
// "features of the Uluru - Kata Tjuta National Park. Uluru is " +
// "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
// "Aboriginal people of the area. It has many springs, waterholes, " +
// "rock caves and ancient paintings. Uluru is listed as a World " +
// "Heritage Site.</p>" +
// '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
// "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
// "(last visited June 22, 2009).</p>" +
// "</div>" +
// "</div>";
// const infowindow = InfoWindow({
//   content: contentString,
// });

export class Maps extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      events : []
     
    };
  }

    // addListener(){
    // infowindow.open({
    //   anchor: Marker,
    //   map,
    //   shouldFocus: false,
    // })}

  getEvents(params) {
    const {location} = this.props;

    var url = '/events?location=' + location;
    var options = {
        method: "GET",
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
        
    };

    fetch(url, options)
    .then((response) => response.text().then((eventObj) => {
        var obj = JSON.parse(eventObj);
        var events = [];
        for (var i in obj) 
            events.push(obj[i]);
        this.setState({events});
    }))
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getEvents()
  }




  render() {
    // let latArr = [47.6740,47.9790];
    // let lngArr = [-122.1215,-122.2021];
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
          initialCenter={{ lat: 29.7604, lng: -95.3698 }}
        >
          
          {this.state.events.map((event,index)=>{
            // console.log(this.state.lngArr)
            
         
            return(
        
                <Marker class="tooltip" position={{lat: event.latitude,lng: event.longitude}} />
      
                )

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