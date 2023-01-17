const notifyRoutes = require('./NotifyRoutes');

module.exports = (app) => {
  app.use('/', [notifyRoutes]);
};
