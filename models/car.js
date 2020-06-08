const mongoose = require('mongoose');

const pointSchema = require('./pointSchema');


const carSchema = new mongoose.Schema({
    carName : {
        type: String,
        required: true
    },
    driverName: {
        type: String,
        required: true
    },
    isAvailable : {
        type : Boolean,
        required : true,
        default : false
    },
    currentLocation: {
        type : pointSchema,
        required : true
    }    
});

carSchema.index({currentLocation: '2dsphere'});

module.exports = mongoose.model('Car', carSchema);