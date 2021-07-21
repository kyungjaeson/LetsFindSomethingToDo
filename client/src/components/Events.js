
import React, { useState, useEffect } from 'react';
import Maps from './Maps';



function Events(props) {
    console.log(props)
    const [events, setEvents] = useState([]);
    const location = props.location;
   
    const [lat, setLat] = useState([])
    const [lng, setLng] = useState([])
    var latArr = [];
    var lngArr = []
    useEffect( () => {
        // console.log("hello this use effect")
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
                    var arr = [];
                   
                    for (var i in obj) 
                        arr.push(obj[i]);
                        console.log(obj[i].latitude)
                        latArr.push(obj[i].latitude)
                        lngArr.push(obj[i].longitude)
                    setEvents(arr);
         
                }))
                .catch(err => console.log(err))

}, [location]);

   
    return (
        <section>
           
            <div className="events">
            {events.map((event) => (
                <div className="event">
                    <div id="name">{event.name}</div>
                    <div id="date">{event.time_start}</div>
                    <div id="location lat">{event.latitude}</div>
                    <div id="location long">{event.longitude}</div>
                    <div id="location name">{event.location.display_address}</div>
                </div>
            ))}
        </div>
        </section>
        
    )
}

export default Events
