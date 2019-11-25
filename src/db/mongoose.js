const mongoose = require('mongoose')
// revisa tu connectionURL aqui :-)
const connectionURL = 'mongodb+srv://admin:admin@clustertaco-socc1.mongodb.net/exfinal?retryWrites=true&w=majority'
//var connectionURL = process.env.DATABASE_CONNECTION_STRING || require('../config.js').connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
