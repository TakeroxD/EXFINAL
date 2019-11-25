const mongoose = require('mongoose')
// revisa tu connectionURL aqui :-)
var connectionURL = process.env.DATABASE_CONNECTION_STRING || require('../config.js').connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
