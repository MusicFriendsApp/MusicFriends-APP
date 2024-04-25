export default async function getUserSpotify() {
  const token = localStorage.getItem('access_token')
    async function fetchProfile(token) {
      const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
      });
      const profile = await result.json();
      return profile
    }
    const profile = await fetchProfile(token)
    return profile
}


export default async function getUserTopArtist() {
  const token = localStorage.getItem('access_token')
    async function fetchProfile(token) {
      const result = await fetch("https://api.spotify.com/v1/me/top/artists", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
      });
      const userTopArtist = await result.json();
      return userTopArtist
    }
    const userTopArtist = await fetchProfile(token)
    return userTopArtist 
}