const router = require('express').Router()
router.use('/user', require('./user.router'))
router.use('/genre', require('./genre.router'))
router.use('/track', require('./track.router'))

module.exports = router