import React, { useState, useEffect } from 'react'

// icon
import SpotifyIcon from '../../components/Icons/Spotify'

// utils
import useDebounce from '../../utils/useDebounce'

// components
import Search from '../../components/Search'
import List from '../../components/List'

import './styles.css'

function Main({ searchAlbums, searchArtists, searchActions }) {
  const [searchInput, setSearchInput] = useState('')
  const searchDebounce = useDebounce(searchInput, 500)

  useEffect(() => {

    if (!searchInput) return

    searchActions.get({
      q: searchInput,
      type: ['album', 'artist', 'track']
    })

  }, [searchDebounce])


  const renderSectionSearch = () => (
    <>
      <span className='containerX-search-title'>Busque por artistas, álbuns ou músicas</span>
      <Search
        name={'searchInput'}
        value={searchInput}
        placeholder={'Comece a escrever...'}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </>
  )

  const renderTitle = () => {
    return !!searchDebounce && `Resultados encontrados para "${searchInput}"`
  }

  const renderResultSearch = (search) => {
    return search.map(s => 
      <List
        key={s.uuid}
        title={s.title}
        description={s.description}
        image={s.image}
      />
    )
  }

  return (
    <div className='containerX-wrapper'>
      <main className='containerX-main'>
        <div className='containerX-icon'>
          <SpotifyIcon fontSize={32} color='#000' />
        </div>
        <div className='containerX-content'>
          <div className='containerX-search'>
            {renderSectionSearch()}
          </div>
          <div className='containerX-result'>
            <p className='containerX-title'>{renderTitle()}</p>

            {!searchInput && <p className='containerX-title'>{'Álbuns buscados recentemente'}</p>}
            {!!searchAlbums.length && <div className='containerX-result-content'>
              <ul className='containerX-list'>{renderResultSearch(searchAlbums)}</ul>
            </div>}

            {!searchInput && <p className='containerX-title'>{'Artistas buscados recentemente'}</p>}
            {!!searchArtists.length && <div className='containerX-result-content'>
              <ul className='containerX-list'>{renderResultSearch(searchArtists)}</ul>
            </div>}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main
