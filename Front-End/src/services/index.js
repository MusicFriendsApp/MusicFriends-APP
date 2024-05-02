import axios from 'axios'

const api = axios.create({
    baseURL: 'https://spotifyfriends-app.onrender.com/api'
})

export default api