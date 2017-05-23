// Initializes the `rooms` service on path `/rooms`
const createService = require('feathers-rethinkdb');
const hooks = require('./rooms.hooks');
const filters = require('./rooms.filters');

module.exports = function () {
  const app = this;
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');

  const options = {
    name: 'rooms',
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/rooms', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('rooms');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
