const router = require('express').Router();

const Booking = require('../models/booking');
const Passenger = require('../models/passenger');
const Car = require('../models/car');

const {bookingValidation} = require('../validations/bookingValidations');

// request booking
router.post('/request/', async (req, res) => {

    let error = bookingValidation(req.body)
    if (error) res.status(400).send(error.details);

    const bookingDetails = new Booking({
        passengerId : req.body.passengerId,
        carId : req.body.carId,
        from : {
            type : "Point",
            coordinates : req.body.from
        },
        to : {
            type : "Point",
            coordinates : req.body.to
        }
    })

    const isAlreadyBooked = await Car.findById(req.body.carId).catch((err) => {res.send(err).status(400)})
    if (!(isAlreadyBooked.isAvailable)) res.send("This car is Already Booked").status(400)

    try{
        const savedBookingDetails = await bookingDetails.save()
        const updateCarStatus = await Car.findByIdAndUpdate(req.body.carId, {isAvailable : false})
        res.send(savedBookingDetails).status(200)
    }
    catch(err) {
        res.send(err).status(200)
    }
})


// view old bookings
router.get('/old/:passengerId', async (req, res) => {
    try{
        if (req.params.passengerId){
            let bookings = await Booking.find({passengerId : req.params.passengerId})
            if(bookings.length === 0){
                res.send("No boookings yet").status(200)
            }
            else{
                res.send(bookings).status(200)
            }
        }
        else{
            res.send("No passenger Id").status(400)
        }
    }catch (err) {
        res.send(err).status(400)
    }
});

module.exports = router;