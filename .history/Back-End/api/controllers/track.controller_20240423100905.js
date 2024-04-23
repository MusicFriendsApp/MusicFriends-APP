const Track = require("../models/track.model");

async function getOneTrack(request, response) {
  try {
    const track = await Track.findByPk(request.params.id);
    if (track) {
      return response.status(200).json(track);
    } else {
      return response.status(404).send("No track found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
}

async function getAllTracks(request, response) {
  try {
    const users = await Track.findAll();
    return response.status(200).json(users);
  } catch (error) {
    response.status(500).send(error.message);
  }
}

async function addTrack(request, response) {
  try {
    await Track.create({
      track_name: request.body.track_name
    });
    return response.status(200).send("Track created");
  } catch (error) {
    return response.status(400).send("Bad request: Track already exists");
  }
}

module.exports = {
  getOneTrack, getAllTracks, addTrack
};
