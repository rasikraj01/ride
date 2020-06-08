const router = require('express').Router();

const Passenger = require('../models/passenger');
const {passengerRegisterValidation} = require('../validations/passengerValidations');

router.post('/register', async (req, res) => {

    let error = passengerRegisterValidation(req.body)
    if (error) res.status(400).send(error.details);

    // add passenger
    const passenger = new Passenger({
        name : req.body.name,
        currentLocation : {
            type : "Point",
            coordinates : req.body.currentLocation
        }
    })
    
    // save add
    try{
        const savedPassenger = await passenger.save()
        res.send(savedPassenger).status(200)
    }catch (err) {
        res.send(err).status(400)
    }
});



module.exports = router;