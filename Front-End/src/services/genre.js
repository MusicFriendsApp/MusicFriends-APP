import api from './index.js'

//look for user genres
export const getUserGenres = async (id) => {
    const {data} = await api.get(`/genre/genres/${id}`)
    return data
}

