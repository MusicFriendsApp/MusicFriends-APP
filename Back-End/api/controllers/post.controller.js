const Post = require('../models/post.model')
const User = require('../models/user.model')
const { faker } = require('@faker-js/faker');

async function getOnePost(request, response){
    try {
        const post = await Post.findByPk(request.params.id);
        if (post){
            return response.status(200).json(post)
        } else {
            return response.status(404).send("No post found");
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
}


async function getAllPost(request, response) {
    try {
      const posts = await Post.findAll();
      return response.status(200).json(posts);
    } catch (error) {
      response.status(500).send(error.message);
    }
  }


async function deletePost(request, response) {
    try {
      await Post.destroy({
        where: {
          id: request.params.post_id
        },
        force: true,
      });
      return response.status(200).send("Post deleted");
    } catch (error) {
      return response.status(400).send("Bad request: Post doesn't exist");
    }
  }

async function addNewPost(request, response) {
  try {
    const post = await Post.create({
      body: request.body.body,
      parentId: request.body.parentId,
    });

    const user = await User.findOne({
      where: {
        spotify_id: request.body.userSpotifyId
      }
    })
  
    await user.addPost(post)
    return response.status(200).send("Post created");
  } catch (error) {
    console.log(error)
    return response.status(400).send("Bad request: Post already exists");
  }
}

async function getCurrentUserPosts(request, response) {
  try {
    const user = await User.findOne({
      where: {
        spotify_id: request.params.userId
      }
    })
    const posts = await Post.findAll({
      where: {
        userId: user.id
      }
    });
    return response.status(200).json(posts);
  } catch (error) {
    response.status(500).send(error.message);
  }
}

module.exports = {
    getOnePost,
    getAllPost,
    deletePost,
    addNewPost,
    getCurrentUserPosts
}