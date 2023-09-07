const dotenv = require('dotenv').config();
const colors = require('colors');
const mongoose = require('mongoose');

//import app.js
const app = require('./app');

//connect to the port
const port = process.env.PORT;

// connect your server to mongoDb
const uri = process.env.DATABASE_URL;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Database connection is successful`.blue.bold);
  });

//check app is listening to the port
app.listen(port, () => {
  console.log(`listening on port ${port}`.blue.bold);
});
