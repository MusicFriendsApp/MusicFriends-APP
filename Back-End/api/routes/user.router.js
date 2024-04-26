const { getOneUser, getAllUser, multipleUser, addUser, deleteUser, updateUser, userGenres} = require('../controllers/user.controller');

const router = require('express').Router()
router.get('/', getAllUser)
router.get('/:spotify_id', getOneUser)
router.post('/addUser', addUser)
router.delete('/deleteUser/:spotify_id', deleteUser)
router.put('/updateUser/:spotify_id', updateUser)


router.get('/genres/:userid', userGenres)


module.exports = router