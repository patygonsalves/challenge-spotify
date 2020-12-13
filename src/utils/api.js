function getAPIUrl() {
  return 'https://api.spotify.com/v1'
}

function getRedirectAPI() {
  return 'http://localhost:8080'
}

function getSpotifyWebLoginAPI() {
  return `https://accounts.spotify.com/authorize/?client_id=${process.env.CLIENT_ID}&response_type=token&redirect_uri=http://localhost:8080/`
}


export { getAPIUrl, getRedirectAPI, getSpotifyWebLoginAPI }
