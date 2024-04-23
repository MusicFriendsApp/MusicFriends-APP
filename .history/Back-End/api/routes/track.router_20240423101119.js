const { getOneTrack, getAllTracks, addTrack } = require('../controllers/track.controller');

const router = require('express').Router()
router.get('/', getAllTracks)
router.get('/:id', getOneTrack)
router.post('/addTrack', addTrack)

module.exports = router