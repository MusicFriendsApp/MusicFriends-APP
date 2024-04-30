const { getOneUser, getCurrentUser, getAllUser, createUser, deleteUser, updateUser, userGenres, followUser, unfollowUser} = require('../controllers/user.controller');

const router = require('express').Router()
router.post('/followUser', followUser)
router.post('/unfollowUser', unfollowUser)
router.get('/', getAllUser)
router.get('/:id', getOneUser)
router.get('/currentUser/:spotify_id', getCurrentUser)
router.post('/addUser', createUser)
router.delete('/deleteUser/:spotify_id', deleteUser)
router.put('/updateUser/:spotify_id', updateUser)
router.get('/genres/:userid', userGenres)


module.exports = router