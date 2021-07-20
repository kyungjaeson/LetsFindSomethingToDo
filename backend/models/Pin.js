const mongoose = require("mongoose")

const PinSchema = new mongoose.Schema({
    username:{
        type: String,
    },
    desc:{
        type:String,
        min: 3
    },
    lattitude:{
        type: Number,
    },
    longitude:{
        type: Number,
    }

    },
    {timestamps: true}
);

module.exports = mongoose.model("Pin", PinSchema)