import UserGenres from '../../../Back-End/api/models/usergenres.model.js'
import api from './index.js'

export const createUser = async (username,country,spotify_id,profile_picture_sm,profile_picture_bg) => {
  try {
    const {data} = await api.post("/user/addUser", {
        username: username,
        country: country,
        spotify_id: spotify_id,
        profile_picture_sm: profile_picture_sm,
        profile_picture_bg: profile_picture_bg,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCurrentUser = async (spotify_id) => {
    const {data} = await api.get(`/user/${spotify_id}`)
    return data 
}

export const addTopTenArtist = async (artist_name, spotify_id) => {
  try {
    const {data} = await api.post("/artist/addArtist", {
        artist_name: artist_name,
        spotify_id: spotify_id,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const userGenres = async (spotify_id) => {
    const {userid} = await api.get(`/user/${spotify_id}`)
      return userid
}



      /* 
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
} */
