const { getOneUser, getAllUser, multipleUser, addUser} = require('../controllers/user.controller');

const router = require('express').Router()
router.get('/', getAllUser)
router.post('/addUser', addUser)
//router.post('/multiple', multipleUser)

module.exports = router