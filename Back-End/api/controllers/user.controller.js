const User = require("../models/user.model");
const UserGenres = require("../models/usergenres.model");
const Follow = require("../models/follow.model")

async function getOneUser(request, response) {
  try {
    const user = await User.findOne(
      {
        where: {
          id: request.params.id
        }
      }
    );
    if (user) {
      return response.status(200).json(user);
    } else {
      return response.status(404).send("No user found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
}

async function getCurrentUser(request, response) {
  try {
    const user = await User.findOne(
      {
        where: {
          spotify_id: request.params.spotify_id
        }
      }
    );
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

async function createUser(request, response) {
  try {
    await User.create({
      username: request.body.username,
      country: request.body.country,
      spotify_id: request.body.spotify_id,
      profile_picture_sm: request.body.profile_picture_sm,
      profile_picture_bg: request.body.profile_picture_bg,
    });
    request.session.save(() => {
      request.session.logged_in = true;
      request.session.user = {
        username: request.body.username,
        spotify_id: request.body.spotify_id,
      };
    });
    return response.status(200).send(`User ${User.username} created`);
  } catch (error) {
    console.log(error)
    return response.status(400).send("User already exists");
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
        profile_picture: request.body.profile_picture,
      }, {
        where: {
          id: request.params.id,
        }
      }
    );
    return response.status(200).send("User info updated");
  } catch (error) {
    return response.status(400).send("Bad request");
  }
}


async function userGenres(request, response) {
  try {
    const usersGenres = await UserGenres.findAll({
      where: {
        userid: request.params.userid
      }
    })
    return response.status(200).json(usersGenres);
  } catch (error) {
    response.status(500).send(error.message);
  }
}

async function followUser(request, response) {
  try {
    const currentUser = await User.findOne({
      where: {
        spotify_id: request.body.currentUserId
      }
    });
    const toFollowUser = await User.findOne({
      where: {
        spotify_id: request.body.toFollowId
      }
    });
    
    await Follow.create({
      userId: currentUser.id,
      followingUserId: toFollowUser.id,
    })
    
    return response.status(200).send('User Followed');
  } catch (error) {
    response.status(500).send(error.message);
  }
}

async function unfollowUser(request, response) {
  try {
    const currentUser = await User.findOne({
      where: {
        spotify_id: request.body.currentUserId
      }
    });
    const toFollowUser = await User.findOne({
      where: {
        spotify_id: request.body.toFollowId
      }
    });
    
    await Follow.destroy({
      where: {
        userId: currentUser.id,
        followingUserId: toFollowUser.id,
      }
    })
    
    return response.status(200).send('User Followed');
  } catch (error) {
    response.status(500).send(error.message);
  }
}

module.exports = {
  getOneUser,
  createUser,
  getAllUser,
  deleteUser,
  updateUser,
  userGenres,
  getCurrentUser,
  followUser,
  unfollowUser
};
