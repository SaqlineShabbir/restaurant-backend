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
// const corsOptions = {
//   origin: ['http://localhost:5173', 'https://restaurant-sage-theta.vercel.app'],
//   credentials: true,
//   optionSuccessStatus: 200,
// }

app.use(cors());

// Handling preflight requests
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://localhost:5173"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});


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
