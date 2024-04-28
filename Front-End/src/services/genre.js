import api from './index.js'

export const getUserGenres = async (id) => {
    const {data} = await api.get(`/genre/genres/${id}`)
    console.log(data)
    const userGenres = data
    return userGenres
}