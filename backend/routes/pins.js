const router = require("express").Router();
const cors = require('cors')
const Pin = require("../models/Pin")


router.post("/", async (req,res)=>{
    const {
        username, 
        desc,
        lattitude, 
        longitude 
    } = req.body
    const newPin = new Pin({username,desc,lattitude,longitude})

    try{
        const savedPin = await newPin.save()
        console.log( savedPin)
        res.status(200).json(savedPin)
    }
    catch(error){
        res.status(500).json(error)
    }
})

router.get("/", async (req,res) => {
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (error) {
        res.status(500).json(error)
        
    }
})

module.exports = router