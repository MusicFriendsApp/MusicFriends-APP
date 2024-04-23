const { getAllArtist, getOneArtist, addArtist } = require('../controllers/artist.controller')


const router = require('express').Router()
router.get('/', getAllArtist)
router.get('/:id', getOneArtist)
router.post('/addArtist', addArtist)


module.exports = router