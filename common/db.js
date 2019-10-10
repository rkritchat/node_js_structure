const mongoose = require('mongoose')
const mongoOption = { useNewUrlParser: true, useUnifiedTopology: true }
const dotenv = require('dotenv/config')

const connectDb = () => {
  mongoose.connect(process.env.DB_CONNECTION, mongoOption, () => {
    console.log('connected db')
  })
}

module.exports = { connectDb }
