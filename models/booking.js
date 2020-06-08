const mongoose = require('mongoose');
const pointSchema = require('./pointSchema');

const bookingSchema = new mongoose.Schema({
    carId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Car',
        required : true
    },
    passengerId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Passenger',
        required : true
    },
    timestamp : {
        type : Date,
        required : true,
        default : Date.now()
    },
    from : pointSchema,
    to : pointSchema,
});

bookingSchema.index({currentLocation: '2dsphere'});

module.exports = mongoose.model('Booking',bookingSchema);