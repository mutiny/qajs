const { authenticate } = require('feathers-authentication').hooks;
const genRandName = require('../../hooks/gen-rand-room-name');
const { restrictToOwner } = require('feathers-authentication-hooks');

const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: 'id',
    ownerField: 'id',
  }),
];
module.exports = {
  before: {
    all: [],
    // all: [ authenticate('jwt') ], TODO
    find: [...restrict],
    get: [],
    create: [authenticate('jwt'), genRandName()],
    update: [...restrict],
    patch: [...restrict],
    remove: [...restrict],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
