import axios from 'axios'

const api = axios.create({
    baseURL: 'https://spotifyfriends-app.onrender.com:3000/api'
})

export default api