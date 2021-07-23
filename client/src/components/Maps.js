import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import googleMapStyles from "../assets/GoogleMapsStyle";



export class Maps extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      latitude: 0,
      longitude: 0,
      location: ""
    };
  }

  setEventState() {
    const {location} = this.props;
    const {latitude} = this.props;
    const {longitude} = this.props;

    var url = '/events?location';

    if (latitude !== undefined && longitude !== undefined) {
      url = '/events?latitude=' + latitude + '&longitude=' + longitude;
      this.setState({latitude: latitude, longitude:longitude});
    } else {
      url += location;
      this.setState({location: location});
    }
    
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
        var arr = [];
                    
        for (var i in obj) 
          arr.push(obj[i]);
        this.setState({events: arr});    
      })).catch(err => console.log(err));
  }
  
  componentDidMount() {
    this.setEventState();
  }

  formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  thisLink(id) {
    return "/eventDetail/" + id;
  }

  render() {
    let latA = [47.6740,47.9790];
    let lngA = [-122.1215,-122.2021];

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
            initialCenter={{ lat: latA[0], lng: lngA[0] }}
          >
            
            {this.state.events.map((event,index)=>{
              // console.log(this.state.lngArr)
              return (<Marker position={{lat: event.latitude,lng: event.longitude}} title={event.name + ' at ' + event.location.display_address} />)
            })

            }
          
          
          </Map>
          
        </div>
        <section>         
          <div className="events">
          {this.state.events.map((event) => (
              <div className="event">
                  <div id="name">{event.name}</div>
                  <div id="date">{this.formatDate(event.time_start)}</div>
                  <div id="cost">{event.cost}</div>
                  <div id="location">{event.location === undefined ? "" : event.location.display_address}</div>
                  <a href={this.thisLink(event.id)} target="_blank">See Details</a>
              </div>
            ))}
          </div>
        </section>
      </section>
    ));
  }
}

Maps.defaultProps = googleMapStyles;

export default GoogleApiWrapper({
  apiKey: "AIzaSyB54lD_3Rfa6gMLVnzVzbxUI-zZfLWCDr8",
})(Maps);