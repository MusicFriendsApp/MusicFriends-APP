import api from './index.js'

export const addPost = async (body, spotify_id, parent_id) => {
  try {
    const {data} = await api.post("/post/addPost", {
      body: body,
      userSpotifyId: spotify_id,
      parentId: parent_id,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}