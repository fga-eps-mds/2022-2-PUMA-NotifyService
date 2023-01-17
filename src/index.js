/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const express = require('express');
const cors = require('cors');
const environment = require('./config/environment');
const configRoutes = require('./routes/router')
// eslint-disable-next-line no-unused-vars
const db = require('../dbconfig/dbConfig');

environment.configEnv();
const app = express();
app.disable('x-powered-by');
const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/router')(app);

console.log('Before config routes');
configRoutes(app);
console.log('After config routes');

app.listen(3003);
module.exports = app;