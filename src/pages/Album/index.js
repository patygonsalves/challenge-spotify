import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation, useHistory } from 'react-router-dom'

// components
import ListTrack from '../../components/ListTrack'

// utils
import { msToMinutesAndSeconds } from '../../utils/time'

import './styles.css'

function AlbumPage({
  searchAlbums,
  tracks,
}) {
  const location = useLocation()
  const history = useHistory()

  const [album, setAlbum] = useState({})

  useEffect(() => {
    const { pathname } = location

    const uuid = pathname.split('/')[2]
    const findAlbum = searchAlbums.filter(s => s.uuid === uuid)
    if (!!findAlbum.length) {
      setAlbum(findAlbum[0])
    }

  }, [location])

  const renderTracks = () => {
    return tracks.map(t =>
      <ListTrack
        key={t.track_number}
        number={t.track_number}
        name={t.name}
        time={msToMinutesAndSeconds(t.duration_ms)}
      />
    )
  }
  
  return (
    <main className='albumX-container'>
      <div className='albumX-content-button'>
        <button className='albumX-button' onClick={() => history.goBack()}>Voltar</button>
      </div>
      <main className='albumX-main'>
        <div className='albumX-content'>
          <img src={album.image} width={175} height={175} alt={`Album ${album.name}`} />
          <span className='albumX-title'>{album.title}</span>
          <span className='albumX-description'>{album.description}</span>
        </div>
        <div>
          <ul>{renderTracks()}</ul>
        </div>
      </main>
    </main>
  )
}

AlbumPage.propTypes = {
  searchAlbums: PropTypes.array,
  tracks: PropTypes.array,
}

export default AlbumPage
