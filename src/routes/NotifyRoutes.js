/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    Project: 'Puma',
    Service: 'Notify-Service',
  });
});
