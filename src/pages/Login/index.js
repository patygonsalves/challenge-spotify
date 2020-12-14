import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// icon
import SpotifyIcon from '../../components/Icons/Spotify'

// url
import { getSpotifyWebLoginAPI } from '../../utils/api'

import './styles.css'

function Login({
  auth,
  authActions,
}) {
  const history = useHistory()

  useEffect(() => {
    const { token } = auth
    const { href } = window.location
  
    if (token) return redirect()

    if (href.indexOf('token') !== -1) {
      const token = href.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]
      authActions.login({ token })
      redirect()
    }
  }, [])

  const handleLogin = e => {
    e.preventDefault()
    window.location.assign(getSpotifyWebLoginAPI())
  }

  const redirect = () => {
    history.push('/search')
  }

  return (
    <main className='mainX-container'>
      <div className='mainX-content'>
        <div className='mainX-image'>
          <SpotifyIcon color='#1DB954' fontSize={42} />
        </div>
        <span className='mainX-title'>Spotify Challenge</span>
        <span className='mainX-description'>Serviço de música digital que dá acesso a milhões de músicas.</span>
        <div className='mainX-box-button'>
          <button onClick={handleLogin} className='mainX-button'>Login</button>
        </div>
      </div>
    </main>
  )
}

export default Login
