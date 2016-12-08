/** Handle uploads */
module.exports = function({ destDir }) {
  const multer = require('multer')
  const mimeTypes = require('mime-types')
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destDir)
    },
    filename: function (req, file, cb) {
      let name = file.originalname ? file.originalname : ""
      let nameLenth = name && (name.lastIndexOf('.') > 0 ? name.lastIndexOf('.') : name.length)
      cb(null, name.substr(0, nameLenth) + '-' + Date.now() + '.' + mimeTypes.extension(file.mimetype))
    }
  })

  const upload = multer({storage})

  return upload
}

