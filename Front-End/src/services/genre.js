import api from './index.js'

export const getUserGenres = async (id) => {
    const {data} = await api.get(`/genres/${id}`)
        console.log({data})
    return data
}