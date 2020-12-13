const isNotEmpty = (array) => {
  return !!array.length
}

const normalizeAlbums = (albums) => {
  return albums.map(album => { 
    return {
      id: album.id,
      title: album.name,
      description: album.artists[0].name,
      image: isNotEmpty(album.images) ? album.images[0].url : null,
    }
  })
}

const normalizeArtists = (artists) => {
  return artists.map(artist => { 
    return {
      id: artist.id,
      title: artist.name,
      description: '',
      image: isNotEmpty(artist.images) ? artist.images[0].url : null,
    }
  })
}

const normalizeTracks = (tracks) => {
  return tracks.map(track => { 
    const { album } = track
    return {
      id: track.id,
      title: track.name,
      description: album.artists[0].name,
      image: isNotEmpty(album.images) ? album.images[0].url : null,
    }
  })
}


export { normalizeAlbums, normalizeArtists, normalizeTracks }
