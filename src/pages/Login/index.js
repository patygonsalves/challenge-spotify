import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose, bindActionCreators } from 'redux'

import SpotifyIcon from '../../components/Icons/Spotify'

// auth
import { selectAuth } from '../../flux/selectors'
import authActionsCreators from '../../actions/auth'

// url
import { getSpotifyWebLoginAPI } from '../../utils/url'

import './styles.css'

function Login({
  auth,
  authActions,
}) {

  useEffect(() => {
    const { href } = window.location

    if (href.indexOf('token') !== -1) {
      const token = href.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]
      authActions.login({ token })
    }
  }, [])

  const handleLogin = e => {
    e.preventDefault()
    window.location.assign(getSpotifyWebLoginAPI())
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

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  // auth
  auth: selectAuth,
})

function mapDispatchToProps(dispatch) {
  return {
    authActions: {
      ...bindActionCreators(authActionsCreators.auth, dispatch),
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
)(Login)
