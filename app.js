const express = require('express')
const app = express()
const db = require('./common/db')
const post = require('./routs/post')
const bodyParser = require('body-parser')
require('dotenv/config')

//connect database
db.connectDb()
app.use(bodyParser.json())
app.use('/post', post)
app.listen(process.env.PORT)
