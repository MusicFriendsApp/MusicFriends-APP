import api from './index.js'

export const addPost = async (title, body, spotify_id, parent_id) => {
  try {
    const {data} = await api.post("/post/addPost", {
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