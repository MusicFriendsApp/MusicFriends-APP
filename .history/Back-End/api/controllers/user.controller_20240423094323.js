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

async function deleteUser(request, response) {
  try {
    await User.destroy({
      where: {
        spotify_id: request.params.spotify_id
      },
      force: true,
    });
    return response.status(200).send("User deleted");
  } catch (error) {
    return response.status(400).send("Bad request: User doesn't exist");
  }
}

async function updateUser(request, response) {
  try {
    await User.update(
      {
        username: request.body.username,
        country: request.body.country,
        spotify_id: request.body.spotify_id,
        profile_picture: request.body.profile_picture,
      }, {
        where: {
          id: request.params.id,
        }
      }
    );
    return response.status(200).send("User created");
  } catch (error) {
    return response.status(400).send("Bad request: User already exists");
  }
}

// GENERATES MULTIPLE USER EXAMPLES FOR DEVELOPING
/* async function multipleUser(request, response) {
  try {
    for (let index = 0; index < 20; index++) {
      const user = User.create({
        username: faker.internet.userName(),
        country: faker.location.countryCode('alpha-2'),
        spotify_id: Math.floor(Math.random() * 10000),
        profile_picture: faker.image.abstract(1234, 2345, true),
      });
    }
    return response.status(200).send("User created");
  } catch (error) {
    return response.status(400).send("Bad request: User already exists");
  }
} */

module.exports = {
  getOneUser,
  addUser,
  getAllUser,
  deleteUser
  //multipleUser
};
