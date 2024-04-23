const { getOneUser, getAllUser, multipleUser, addUser, deleteUser, updateUser} = require('../controllers/user.controller');

const router = require('express').Router()
router.get('/', getAllUser)
router.get('/:id', getOneUser)
router.post('/addUser', addUser)
router.delete('/deleteUser/:spotify_id', deleteUser)
router.put('/updateUser/:id', updateUser)
//router.post('/multiple', multipleUser)

module.exports = router