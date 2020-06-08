const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const carRoutes = require('./routes/carRoutes');
const passengerRoutes = require('./routes/passengerRoutes');
const bookingRoutes = require('./routes/bookingRoutes');


const app = express();
const PORT = process.env.PORT || 4000;


mongoose.connect(
    `${process.env.DB_CONNECT}`,
    { useNewUrlParser: true ,useUnifiedTopology: true },
    () => {
     console.log('Database connected');
    }
)

app.use(express.json());

app.use('/api/car/', carRoutes);
app.use('/api/passenger/', passengerRoutes);
app.use('/api/booking/', bookingRoutes);



app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
    
})