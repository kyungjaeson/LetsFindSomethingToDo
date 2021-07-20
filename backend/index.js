const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express();
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')

dotenv.config({path:__dirname+'/.env'})

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true,    
    })
    .then(() => {
        console.log("MongoDB connection started")
    })
    .catch((error) => console.error(error))

app.use("/api/pins", pinRoute)
app.use("/api/users", userRoute)

app.listen(5000, ()=>
    {console.log("Backend server listening")}
)