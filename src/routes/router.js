const notifyRoutes = require('./notifyRouter');

module.exports = (app) => {
  app.use('/', [notifyRoutes]);
};