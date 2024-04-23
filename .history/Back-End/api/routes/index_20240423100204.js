const router = require('express').Router()
router.use('/user', require('./user.router'))
router.use('/genre', require('./genre.router'))

module.exports = router