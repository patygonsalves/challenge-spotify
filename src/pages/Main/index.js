import React, { useState, useEffect } from 'react'

// icon
import SpotifyIcon from '../../components/Icons/Spotify'

// utils
import useDebounce from '../../utils/useDebounce'

// components
import Search from '../../components/Search'
import List from '../../components/List'

import './styles.css'

function Main({ search, searchActions }) {
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
    return !!searchDebounce ? `Resultados encontrados para "${searchInput}"` : 'Álbuns buscados recentemente'
  }

  const renderResultSearch = () => {
    return search.map(s => 
      <List
        key={s.id}
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
            <div className='containerX-result-content'>
              {!!search.length && <ul className='containerX-list'>{renderResultSearch()}</ul>}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main
