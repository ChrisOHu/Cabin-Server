'use strict';

const blobService = require('feathers-blob')
const fsBlobStore = require('fs-blob-store')
const multipartMiddleware = require('multer')()

const hooks = require('./hooks');

module.exports = function() {
  const app = this;
  const blobStorage = fsBlobStore(app.get('public') + '/uploads')

  app.use('/uploads',
    multipartMiddleware.single('file'),
    function(req, res, next) {
      /** req.feathers will be available as the 'params' of service */
      const {file: buffer, mime} = req.body
      req.feathers.buffer = buffer
      req.feathers.mime = mime
      next()
    },
    blobService({Model: blobStorage})
  )

  app.service('/uploads').before(hooks.before)
  app.service('/uploads').after(hooks.after)
}

