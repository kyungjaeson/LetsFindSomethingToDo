import React, {useEffect, useState} from 'react';
import NewWindow from 'react-new-window';

function Event(props) {
    const [event, setEvent] = useState([]);
    const id = props.id;

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
    
    return (
            <NewWindow>
                <div id="name">{event.name}</div>
                <div id="id">{event.id}</div>
                <div id="url">{event.event_site_url}</div>
                <div id="ticketurl">{event.tickets_url}</div>
                <div id="date">{event.time_start}</div>
                <div id="dateend">{event.time_end}</div>
                <div id="img"><img alt={event.name} src={event.image_url} /></div>
                <div id="description">{event.description}</div>
                <div id="cost">{event.cost}</div>
                <div id="location lat">{event.latitude}</div>
                <div id="location long">{event.longitude}</div>
        </NewWindow>
    )
}

export default Event
