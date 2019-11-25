const express = require('express')
require('./db/mongoose')
var cors = require('cors');

const router = require('./routes.js')

if(process.env.NODE_ENV == 'production'){
var connectionURL = process.env.DATABASE_CONNECTION_STRING
console.log("ConnectionUrl= " + connectionURL)
}


const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json()) // parsea a json
app.use(router)


app.listen(port, function() {
  console.log('Server up and running on port ' + port)
})
