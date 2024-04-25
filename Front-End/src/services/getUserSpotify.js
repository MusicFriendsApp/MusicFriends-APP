export async function getUserSpotify() {
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