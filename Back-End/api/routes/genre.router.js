const { getOneGenre, getAllGenres, addGenre, getUserGenres } = require('../controllers/genre.controller');

const router = require('express').Router()
router.get('/', getAllGenres)
router.get('/:id', getOneGenre)
router.post('/addGenre', addGenre)
router.get('/genres/:id', getUserGenres)

module.exports = router