const express = require('express');
const axios = require('axios').default;
const YAPI_KEY = "tHikPzTbuhEAlvjVF3Lr6HRtkH266HKypSFSZZ-bMAQHm4Gkygotedm7VE2bvzUf62F-Vq9G2LukuA88n842p1VQ9sfYTrxSsN-52IwxMGoyv7mc_pcrFZRObMn1YHYx";
const app = express();
const port = 5000;

app.get('/events', (req, res) => {
    res.contentType('application/json');
    res.status(200);
    // res.set({
    //     "Access-Control-Allow-Origin":"*",
    // });
    var stuff = res.send(getEvents(req.query.location));
    console.log(stuff);
})

app.get('/eventDetail', (req, res) => {
    res.contentType('application/json');
    res.status(200);
    return res.send(getEvent(req.query.id));
})
// I1ztHX9TfP9TzeTYIi5_LZ1x4Ey2SY_4yZnSOupW2qucz6-5kZw1THQ2igOE39xmrl_On3XiQZP2U50uz9-WpM8zd__0jER7FP2vbgj8McRaiO8kMgPF0tvGB3dyXnYx
function getEvents(location) {
    const url = 'https://api.yelp.com/v3/events?location=' + location;
        
        const response = axios.get(url, {headers: {
                "Authorization": `Bearer ${YAPI_KEY}`
            }})
            .then((response) => response.data)
            .then((response) => {
                console.log(response);
                return(response);
            }).catch( (e) => {
                console.log(e)
            });
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