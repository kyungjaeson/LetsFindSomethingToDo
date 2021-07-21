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
                // .then((response) => response.body)
                // .then((response) => response.text())
                .then((text) => text.body.getReader())
                .then(body => console.log(body))
                .catch(err => console.log(err))

            // var body = await response.json().events;
            // if (response.status !== 200) throw Error(body.message);
            // setEvents(await body);
    }, [location]);

    return (
        <div>
            {events}
        </div>
    )
}

export default Events
