const Post = require('../models/post.model')
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

  async function addPost(request, response) {
    try {
      await Post.create({
        title: request.body.title,
        body: request.body.body,
        parentId: request.body.parent_id,
        userId: request.body.spotify_id,
        createdAt: request.body.createdAt
      });
      return response.status(200).send("Post created");
    } catch (error) {
      return response.status(400).send("Bad request: Post already exists");
    }
  }
  




module.exports = {
    getOnePost,
    getAllPost,
    deletePost,
    addPost
}