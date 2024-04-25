const Artist = require("../models/artist.model");
const User = require("../models/user.model");


async function getOneArtist(request, response) {
  try {
    const artist = await Artist.findByPk(request.params.id);
    if (artist) {
      return response.status(200).json(artist);
    } else {
      return response.status(404).send("No artist found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
}

async function getAllArtist(request, response) {
  try {
    const artist = await Artist.findAll();
    return response.status(200).json(artist);
  } catch (error) {
    response.status(500).send(error.message);
  }
}

async function addArtist(request, response) {
  try {
    const artist = await Artist.create({
      artist_name: request.body.artist_name,
      spotify_id: request.body.spotify_id,
    });

    const user = await User.findOne({
      where: {
        spotify_id: '1115344794'
      }
    })

    await user.addArtist(artist)

    return response.status(200).send("Artist created");
  } catch (error) {
    return response.status(400).send("Bad request: Artist already exists");
  }
}

module.exports = {
  getOneArtist,
  addArtist,
  getAllArtist,
};
