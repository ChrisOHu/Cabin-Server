'use strict';


import { populate } from '../../../common/hooks'
import globalHooks from '../../../hooks'
const auth = require('feathers-authentication').hooks
const common = require('feathers-hooks-common')

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.associateCurrentUser({ as: 'userId' })
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: 'userId' })
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: 'userId' })
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: 'userId' })
  ]
};

exports.after = {
  all: [
    populate('user', {service: '/users', field: 'userId', docFields: ['_id', 'name', 'avatar', 'banner']})
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

