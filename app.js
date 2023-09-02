const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./mongoose/routes/UserRoute');
//Middleware
app.use(express.json());
app.use(cors());

//posting and getting from database
app.use('/api/v1/user', userRoute);

app.get('/', (req, res) => {
  res.send('Route is working');
});

module.exports = app;
