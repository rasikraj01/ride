const mongoose = require('mongoose');
const pointSchema = require('./pointSchema');

const passengerSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    currentLocation : pointSchema
});

passengerSchema.index({currentLocation: '2dsphere'});

module.exports = mongoose.model('Passenger', passengerSchema);