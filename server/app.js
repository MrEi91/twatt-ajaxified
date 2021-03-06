const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())

let index = require('./routes/index')
let twatt_recent = require('./routes/twatt-recent')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', index)
app.use('/api/twatt', twatt_recent)

app.listen(3000)

module.exports = app
