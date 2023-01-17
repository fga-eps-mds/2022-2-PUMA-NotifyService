/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const express = require('express');

const routes = express.Router();
const NotifyController = require('../controller/NotifyController');

routes.get('/', (req, res) => {
  res.status(200).json({
    Project: 'Puma',
    Service: 'Notify-Service',
  });
});
