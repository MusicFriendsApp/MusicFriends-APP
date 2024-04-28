const { getOnePost, getAllPost, deletePost, addPost } = require('../controllers/post.controller');

const router = require('express').Router()
router.get('/:id', getOnePost)
router.get('/', getAllPost)
router.delete('/deletePost/:post_id', deletePost)
router.post('/addPost', addPost)



module.exports = router