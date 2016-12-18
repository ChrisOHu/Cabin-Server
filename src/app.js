'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');

const middleware = require('./middleware');
const services = require('./services');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

const uploads = require('./modules/uploads')({destDir: app.get('public') + '/uploads/'})
app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  .use('/', serveStatic( app.get('public') ))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .post('/uploads/file', uploads.single('file'), function(req, res, next) {
    const file = req.file
    const urlPrefix = 'http://' + app.get('host') + ':' + app.get('port') + '/uploads/'
    let url = urlPrefix + file.filename
    res.status(200).json({url})
  })
  .post('/uploads/files', uploads.array('files', 9), function(req, res, next) {
    const files = req.files
    let urls = []
    const urlPrefix = 'http://' + app.get('host') + ':' + app.get('port') + '/uploads/'
    files && files.forEach((file, i, a) => {
      urls.push(urlPrefix + file.filename)
    })
    res.status(200).json({urls})
  })
  .configure(hooks())
  .configure(rest())
  .configure(services)
  .configure(middleware);

module.exports = app;

