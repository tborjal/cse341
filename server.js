const express = require('express');
const dotenv = require('dotenv');
const app = express();
const lesson1Controller = require('./controllers/lesson1')
const mongodb = require('./database/database')

dotenv.config()

app.use('/', require('./routes'));
 
const port = 3000;
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});