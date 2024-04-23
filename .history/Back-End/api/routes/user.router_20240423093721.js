const { getOneUser, getAllUser, multipleUser, addUser, deleteUser} = require('../controllers/user.controller');

const router = require('express').Router()
router.get('/', getAllUser)
router.get('/:id', getOneUser)
router.post('/addUser', addUser)
router.delete('/deleteUser', deleteUser)
//router.post('/multiple', multipleUser)

module.exports = router