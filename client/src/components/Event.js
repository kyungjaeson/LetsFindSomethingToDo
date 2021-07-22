import React, {useEffect, useState} from 'react';
import NewWindow from 'react-new-window';

function Event(props) {
    const [event, setEvent] = useState([]);
    const id = props.id;
    const lat = props.latitude;
    const lng = props.longitude;

    useEffect( () => {
        var url = '/eventDetail?id=' + id;
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
                console.log(obj);
                setEvent(obj);
            }))
            .catch(err => console.log(err))

    }, [id]);

    const formatDate = (date) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString(undefined, options);
    }

    const getAddress = (loc) => {
        if (loc === undefined) {
            return "";
        }

        return loc.display_address;
    }
    
    const getDirectionsUrl = () => {
        return "https://www.google.com/maps/dir/?api=1&destination=" + lat + ',' + lng;
    }


    return (
        <NewWindow>
            <div class="container">
                <div class="row"><div id="event-name">{event.name}</div></div>
                <div id="id">{event.id}</div>
                <div class="row">
                    <div class="col" id="event-cost">Event Cost: ${event.cost}</div>
                    <div class="col" id="event-url"><a target="_blank" href={event.event_site_url}>Event Site</a></div>
                    <div class="col" id="event-ticketurl"><a target="_blank" href={event.tickets_url}>Purchase Tickets</a></div>
                </div>
                <div class="row" id="event-img"><img id="event" alt={event.name} src={event.image_url} /></div>
                <div class="row" id="event-date">{formatDate(event.time_start)}</div>
                <div class="row" id="event-description">{event.description}</div>
                <div id="event-address"><a target="_blank" href={getDirectionsUrl()}>Get Directions</a> to {getAddress(event.location)}</div>
            </div>
        </NewWindow>
    )
}

export default Event
