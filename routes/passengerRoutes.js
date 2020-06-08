const router = require('express').Router();

const Booking = require('../models/booking');
const Passenger = require('../models/passenger');


// request booking
router.post('/request/', async (req, res) => {
    
})


// find cars near by
router.get('/near', async (req, res) => {
    try{
        let nearByCars = await Car.find(
            {
                currentLocation: {
                $nearSphere: {
                    $geometry: {
                        type : "Point",
                        coordinates : [req.query.longitude, req.query.latitude]
                    },
                    $minDistance: 1000,
                    $maxDistance: 5000
                }
                }
            }
            // {_id : 0, currentLocation : {_id : 0, type: 0}}
        )
        
        if (nearByCars.length === 0 ) {
            res.send("no cars nearby").status(200)
        }
        else{
            res.send(nearByCars).status(200)
        }
    }
    catch (err) {
        res.send(err).status(400)
    }
});

module.exports = router;