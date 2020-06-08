const router = require('express').Router();

const Car = require('../models/car');


// add new car route
router.post('/add', async (req, res) => {
    
    // add car
    const car = new Car({
        carName : req.body.carName,
        driverName : req.body.driverName,
        currentLocation : {
            type : "Point",
            coordinates : req.body.currentLocation
        }
    })
    
    // save add
    try{
        const savedCar = await car.save()
        res.send(savedCar).status(200)
    }catch (err) {
        res.send(err).status(400)
    }
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
                    $maxDistance: 5000
                }
                },
                isAvailable : true
            }
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