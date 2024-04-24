import api from './index.js'

export const getCurrentUser = async (spotyfy_id) => {
    const {data} = await api.get(`user/${spotify_id}`)
    return data 
}