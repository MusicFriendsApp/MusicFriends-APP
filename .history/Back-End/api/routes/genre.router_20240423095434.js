const { getOneGenre, getAllGenres, addGenre} = require('../controllers/genre.controller');

const router = require('express').Router()
router.get('/', getAllGenres)
router.get('/:id', getOneGenre)
router.post('/addGenre', addGenre)
//router.post('/multiple', multipleUser)

module.exports = router