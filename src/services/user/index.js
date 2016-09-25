'use strict'

import hooks from './hooks'
import service from 'feathers-rethinkdb'

module.exports = function () {
  const app = this;
  const r = app.rethinkdb
  const dbName = app.get('dbName')

  app.use('/users', service({
    Model: r,
    name: 'users',
    paginate: {
      default: 10,
      max: 50
    }
  }))

  const userService = app.service('/users')
  userService.before(hooks.before)
  userService.after(hooks.after)
}

