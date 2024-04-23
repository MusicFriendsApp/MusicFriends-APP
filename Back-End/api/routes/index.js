const router = require('express').Router()
router.use('/user', require('./user.router'))
router.use("/artist", require("./artist.router"))
module.exports = router