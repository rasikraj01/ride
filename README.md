# Ride

## Documentation 



* Find nearby Cars : make a **GET** request @ `/api/car/near?longitude=<value>&latitude=<value>`


* View old bookings : make a **POST** request @ `/api/booking/old/<passengerId>`


* Request a Booking : make a **POST** request @ `/api/booking/request/`

	Format of Body to POST: 

```
{
	"passengerId" : "5ede674eaf06e31fba554664",
	"carId" : "5ede708a2d23cb4185911c43",
	"from" : [longitude, latitude],
	"to" : [longitude, latitude]
}
```

* Create a new Car : make a **POST** request @ `api/car/add/`

	Format of data to POST: 

```
{
	"carName" : "Maruti800",
	"driverName" : "Joe",
	"currentLocation" : [longitude, latitude]
}
```

* Register a new Passenger : make a **POST** request @ `/api/passenger/register/`

	Format of data to POST: 

```
{
	"name" : "Steve",
	"currentLocation" : [longitude, latitude]
}
```



