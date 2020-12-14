import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

// page
import AlbumPage from '../../pages/Album'

// search
import { selectSearchAlbums, selectSearchTracks } from '../../flux/selectors'


function Album({
  searchAlbums,
  tracks,
}) {
  return (
    <AlbumPage
      searchAlbums={searchAlbums}
      tracks={tracks}
    /> 
  )
}

AlbumPage.propTypes = {
  searchAlbums: PropTypes.array.isRequired,
  tracks: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  // search
  searchAlbums: selectSearchAlbums,
  tracks: selectSearchTracks,
})


const withConnect = connect(
  mapStateToProps,
  {},
)

export default compose(
  withConnect,
)(Album)

