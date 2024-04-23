const Genre = require("../models/genre.model");

async function getOneGenre(request, response) {
  try {
    const genre = await Genre.findByPk(request.params.id);
    if (genre) {
      return response.status(200).json(genre);
    } else {
      return response.status(404).send("No genre found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
}

async function getAllGenres(request, response) {
  try {
    const users = await Genre.findAll();
    return response.status(200).json(users);
  } catch (error) {
    response.status(500).send(error.message);
  }
}

async function addGenre(request, response) {
  try {
    await Genre.create({
      username: request.body.username,
      country: request.body.country,
      spotify_id: request.body.spotify_id,
      profile_picture: request.body.profile_picture,
    });
    return response.status(200).send("Genre created");
  } catch (error) {
    return response.status(400).send("Bad request: Genre already exists");
  }
}

module.exports = {
  getOneGenre, getAllGenres, addGenre
};
