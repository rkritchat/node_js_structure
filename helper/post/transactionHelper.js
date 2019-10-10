const PostSchema = require('../../db/models/Post')

const initPostSchema = req => {
  return new PostSchema({
    title: req.body.title,
    description: req.body.desc
  })
}

module.exports = { initPostSchema }
