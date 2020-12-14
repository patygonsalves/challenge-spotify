const isNotEmpty = (array) => {
  return !!array.length
}

const normalizeAlbums = (albums) => {
  return albums.map(album => { 
    return {
      uuid: album.id,
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
      uuid: artist.id,
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
      uuid: track.id,
      id: album.id,
      title: album.name,
      description: album.artists[0].name,
      image: isNotEmpty(album.images) ? album.images[0].url : null,
    }
  })
}

const normalizedDuplicates = (array) => {
  const data = array.map(item=> [item.id, item])
  const arrayMap = new Map(data)
  return [...arrayMap.values()]
}

export { normalizeAlbums, normalizeArtists, normalizeTracks, normalizedDuplicates }
