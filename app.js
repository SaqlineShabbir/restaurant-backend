const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoute = require('./mongoose/routes/UserRoute');
const menuRoute = require('./mongoose/routes/MenuRoute');
const orderRoute = require('./mongoose/routes/OrderRoute');
const reviewRoute = require('./mongoose/routes/ReviewRoute');
//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//User posting and getting from database
app.use('/api', userRoute);
app.use('/api/menu', menuRoute);
app.use('/api/order', orderRoute);
app.use('/api/review', reviewRoute);

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
