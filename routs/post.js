const express = require('express')
const router = express.Router()
const PostSchema = require('../db/models/Post')
const transactionHelper = require('../helper/post/transactionHelper')

router.post('/test', async (req, res) => {
  try {
    const post = transactionHelper.initPostSchema(req)
    console.log(post)
    const result = await post.save()
    res.send(result)
  } catch (err) {
    console.log(err)
    res.send({ message: err })
  }
})

router.get('/search/:id', async (req, res) => {
  try {
    const result = await PostSchema.findById(req.params.id)
    res.send(result)
  } catch (err) {
    res.send({ message: err })
  }
})

module.exports = router
