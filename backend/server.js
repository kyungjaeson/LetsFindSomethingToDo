const express = require('express');
const axios = require('axios').default;
const YAPI_KEY = "tHikPzTbuhEAlvjVF3Lr6HRtkH266HKypSFSZZ-bMAQHm4Gkygotedm7VE2bvzUf62F-Vq9G2LukuA88n842p1VQ9sfYTrxSsN-52IwxMGoyv7mc_pcrFZRObMn1YHYx";
const app = express();
const port = 5000;


app.get('/events', async (req, res) => {
    console.log("hello world ")
    try {
        res.contentType('application/json');
        res.status(200);
        // res.set({
        //     "Access-Control-Allow-Origin":"*",
        // });
        var {data} = await getEvents(req.query.location);
        console.log(data);
        res.send(data.events);
    } catch (e) {
        res.status(500).json(e);
    }

})

app.get('/eventDetail', (req, res) => {
    res.contentType('application/json');
    res.status(200);

    var datadump = getEvent(req.query.id);
    setTimeout(() => {
        console.log(datadump.events);
        return res.send(datadump.events);
    }, 20000);
})

function getEvents(location) {
    const url = 'https://api.yelp.com/v3/events?limit=50&location=' + location;
        
        return axios.get(url, {headers: {
                "Authorization": `Bearer ${YAPI_KEY}`
            }})

}

function getEvent(id) {
    const url = 'https://api.yelp.com/v3/events/' + id;

    const response = axios.get(url, {headers: {
        "Authorization": `Bearer ${YAPI_KEY}`
    }})
    .then((response) => {
        return(response.data);
    }).catch( (e) => {
        // console.log(e)
        // console.log("URL IS: " + url);
    });
}

app.listen(port, () => {
    console.log("listening on port " + port);
});