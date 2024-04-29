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
    const {data} = await api.get(`/user/currentUser/${spotify_id}`)
    return data
}

export const getOneUser = async (id) => {
  const {data} = await api.get(`/user/${id}`)
  return data
}

export const getAllUsers = async () => {
  const {data} = await api.get('/user/')
  return data
}

export const addTopTenArtist = async (artist_name, spotify_id, userSpotifyId) => {
  try {
    const {data} = await api.post("/artist/addArtist", {
        artist_name: artist_name,
        spotify_id: spotify_id,
        userSpotifyId: userSpotifyId
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addUserGenres = async (genre_name, userSpotifyId) => {
  try {
    const {data} = await api.post("/genre/addGenre", {
        genre_name: genre_name,
        userSpotifyId: userSpotifyId
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
