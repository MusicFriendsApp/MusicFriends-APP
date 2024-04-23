const User = require("../models/user.model");
const { faker } = require('@faker-js/faker');

async function getOneUser(request, response) {
  try {
    const user = await User.findByPk(request.params.id);
    if (user) {
      return response.status(200).json(user);
    } else {
      return response.status(404).send("No user found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
}

async function getAllUser(request, response) {
  try {
    const users = await User.findAll();
    return response.status(200).json(users);
  } catch (error) {
    response.status(500).send(error.message);
  }
}

async function addUser(request, response) {
  try {
    await User.create({
      username: request.body.username,
      country: request.body.country,
      spotify_id: request.body.spotify_id,
      profile_picture: request.body.profile_picture,
    });
    return response.status(200).send("User created");
  } catch (error) {
    return response.status(400).send("Bad request: User already exists");
  }
}

module.exports = {
  getOneGenre, getAllGenres, addGenre
};
