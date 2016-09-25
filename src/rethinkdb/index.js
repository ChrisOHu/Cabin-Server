'use strict'

const rethink = require('rethinkdbdash')

module.exports = function() {
  const app = this
  const dbName = app.get('dbName')

  const r = rethink({
    db: dbName
  })

  app.rethinkdb = r
  
  return r.dbList().contains(dbName)
    .do((dbExists) =>
        r.branch(dbExists,
          {created: 0},
          r.dbCreate(dbName)
        )
    ).run()
    .then(() => {
      return r.db(dbName).tableList().contains('users')
        .do((tableExists) =>
            r.branch(
              tableExists,
              {created: 0},
              r.tableCreate('users')
            )
        )
        .run()
    })
    .catch((err) => {
      console.error('Failed to initialize DB:')
      throw err
    })
}

