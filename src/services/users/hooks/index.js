'use strict';

import { populate } from '../../../common/hooks'
import globalHooks from '../../../hooks'
const auth = require('feathers-authentication').hooks
const common = require('feathers-hooks-common')

exports.before = {
  all: [],
  find: [
    // auth.verifyToken(),
    // auth.populateUser(),
    // auth.restrictToAuthenticated()
  ],
  get: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: '_id' })
  ],
  create: [
    auth.hashPassword()
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: '_id' })
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: '_id' })
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: '_id' })
  ]
};

exports.after = {
  all: [
    common.remove('password')
  ],
  find: [
    common.pluck('_id', 'name', 'avatar', 'banner', 'geolocation', 'profession', 'followers', 'followings', 'favoriteHomes', 'favoriteDesigns', 'hostId', 'designerId')
  ],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
