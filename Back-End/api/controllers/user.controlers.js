const User = require('../models/user.model')

async function getOneUser (request, response){
    try {
        const user = await User.findByPk(request.params.id)
        if (user) {
            return response.status(200).json(user)
        } else {
            return response.status(404).send('No user found')
        }
    } catch (error) {
        response.status(500).send(error.message)
    }
}


async function getAllUser (request, response){
    try {
        const users = await User.findAll()
        return response.status(200).json(users)
    } catch (error) {
        response.status(500).send(error.message)
    }
}

async function addUser (request, response){
    const allUsers = getAllUser()
    
    try {
        const user = await User.create({
            userName: request.body.userName,
            country: request.body.country,
            spotify_id: request.body.spotify_id,
            profile_picture: request.body.profile_picture,
        })
        if (user) {
            return response.status(400).send('Bad request: User already exists')
        } else {
            return response.status(200).send('User created')
        }
    } catch (error) {
        response.status(500).send(error.message)
    }
}


module.exports = {
    getOneUser,
    addUser,
    getAllUser
}