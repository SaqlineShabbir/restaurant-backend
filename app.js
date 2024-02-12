const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoute = require('./mongoose/routes/UserRoute');
const menuRoute = require('./mongoose/routes/MenuRoute');
const orderRoute = require('./mongoose/routes/OrderRoute');
const reviewRoute = require('./mongoose/routes/ReviewRoute');
const cloudinary = require('cloudinary')
//Middleware
app.use(express.json());
// app.use(cors());
app.use(cookieParser());
//
// extrernal middlewares
const corsOptions = {
  origin: "*",
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));

// Handling preflight requests
app.options('*', cors(corsOptions));
// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

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
