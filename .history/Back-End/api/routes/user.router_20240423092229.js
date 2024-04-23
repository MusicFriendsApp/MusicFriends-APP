const { getOneUser, getAllUser, multipleUser} = require('../controllers/user.controller');

const router = require('express').Router()
router.get('/', getAllUser)
router.get('/multiple', multipleUser)

module.exports = router