const { getOnePost, getAllPost, deletePost, addNewPost, 
  getCurrentUserPosts } = require('../controllers/post.controller');

const router = require('express').Router()
router.get('/:id', getOnePost)
router.get('/', getAllPost)
router.get('/userPosts/:userId', 
getCurrentUserPosts)
router.delete('/deletePost/:post_id', deletePost)
router.post('/addPost', addNewPost)



module.exports = router