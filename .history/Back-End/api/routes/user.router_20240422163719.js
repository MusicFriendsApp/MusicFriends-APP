const { getOneUser, getAllUser} = require('../controllers/user.controlers');

const router = require('express').Router()
router.get('/', getAllUser)

module.exports = router