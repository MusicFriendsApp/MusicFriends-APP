import api from './index.js'

export const addPost = async (body, spotify_id, parent_id, createdAt) => {
  try {
    const {data} = await api.post("/post/addPost", {
      body: body,
      parentId: parent_id,
      userId: spotify_id,
      createdAt: createdAt
    })
    return data
  } catch (error) {
    console.log(error)
  }
}