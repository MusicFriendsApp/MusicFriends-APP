export async function loginSpotify() {
  const clientId = '1acc36a5925d412c8beeba78a78caec8'
  const params = new URLSearchParams(window.location.search)
  const code = params.get('code')

  if (!code) {
    redirectToAuthCodeFlow(clientId)
  } else {
    const {access_token, refresh_token, expires_in} = await getAccessToken(clientId, code)
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    localStorage.setItem('expires_in', expires_in);
    setInterval(async () => {
      const {access_token, refresh_token} = await getRefreshToken()
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
    }, 350000)
  }
    async function redirectToAuthCodeFlow(clientId) {
      const verifier = generateCodeVerifier(128)
      const challenge = await generateCodeChallenge(verifier)

      localStorage.setItem('verifier', verifier)

      const params = new URLSearchParams()
      params.append('client_id', clientId)
      params.append('response_type', 'code')
      params.append('redirect_uri', 'http://localhost:5173/home')
      params.append('scope', 'user-read-private user-read-email user-read-currently-playing user-top-read')
      params.append('code_challenge_method', 'S256')
      params.append('code_challenge', challenge)

      document.location = `https://accounts.spotify.com/authorize?${params.toString()}`
    }

    function generateCodeVerifier(length) {
      let text = ''
      let possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return text
    }

    async function generateCodeChallenge(codeVerifier) {
      const data = new TextEncoder().encode(codeVerifier)
      const digest = await window.crypto.subtle.digest('SHA-256', data)
      return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '')
      }

      async function getAccessToken(clientId, code) {
        const verifier = localStorage.getItem('verifier')
        
        const params = new URLSearchParams()
        params.append('client_id', clientId)
        params.append('grant_type', 'authorization_code')
        params.append('code', code)
        params.append('redirect_uri', 'http://localhost:5173/home')
        params.append('code_verifier', verifier)
        
        const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params,
        })
        
        const response = await result.json()
        return response
      }

      async function getRefreshToken() {
        const refreshToken = localStorage.getItem('refresh_token');
        const url = "https://accounts.spotify.com/api/token";

        const payload = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: clientId
          }),
        }
        const body = await fetch(url, payload);
        const response = await body.json();
        return response
      }

}
