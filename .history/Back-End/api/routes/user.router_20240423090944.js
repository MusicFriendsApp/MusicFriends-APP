const { getOneUser, getAllUser} = require('../controllers/user.controller');

const router = require('express').Router()
router.get('/', getAllUser)

module.exports = router