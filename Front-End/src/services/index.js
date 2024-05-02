import axios from 'axios'

const api = axios.create({
    baseURL: 'https://spotify-friends.netlify.app/api'
})

export default api