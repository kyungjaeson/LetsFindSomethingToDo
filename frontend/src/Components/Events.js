import { INSPECT_MAX_BYTES } from 'buffer';
import React, { useState, useEffect } from 'react';


function Events(props) {
    const [events, setEvents] = useState([]);
    const location = props.location;
    useEffect( () => {
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
                    setEvents(arr);
                }))
                // .then((response) => response.json())
                // .then((response) => response.text())
                // .then(body => console.log(body))
                .catch(err => console.log(err))

            // var body = await response.json().events;
            // if (response.status !== 200) throw Error(body.message);
            // setEvents(await body);
}, [location]);

    const getEvent = () => {

        events.forEach((event) => {
            return (
                <div className="event">
                    <div id="name">event.name</div>
                    <div id="date">event.time_start</div>
                    <div id="location lat">event.latitude</div>
                    <div id="location long">event.longitude</div>
                    <div id="location name">event.location.display_address</div>
                </div>
            )
        })
    }

    
    return (
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
    )
}

export default Events
