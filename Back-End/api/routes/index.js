const router = require('express').Router()
router.use('/user', require('./user.router'))
router.use('/post', require('./post.router'))

module.exports = router