const mongoose = require('mongoose')
const config = require('../config.js')
// revisa tu connectionURL aqui :-)
const connectionURL = process.env.connectionUrl || config.connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
