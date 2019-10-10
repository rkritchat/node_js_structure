const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  titile: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    defualt: Date.now
  }
})

module.exports = mongoose.model('Posts', PostSchema)
