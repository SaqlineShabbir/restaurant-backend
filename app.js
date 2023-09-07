const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoute = require('./mongoose/routes/UserRoute');
//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//User posting and getting from database
app.use('/api', userRoute);

app.get('/', (req, res) => {
  res.send('Route is working');
});
app.get('/cookie', (req, res) => {
  res.cookie('test', 'sabcookie').send();
  console.log(res.cookie);
  console.log(cookieParser);
  res.send('Route is working');
});

module.exports = app;
