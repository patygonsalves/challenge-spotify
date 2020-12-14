import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose, bindActionCreators } from 'redux'

// page
import MainPage from '../../pages/Main'

// search
import { selectSearchAlbums, selectSearchArtists } from '../../flux/selectors'
import searchActionsCreators from '../../actions/search'


function Main({
  searchAlbums,
  searchArtists,
  searchActions,
}) {
  return (
    <MainPage
      searchAlbums={searchAlbums}
      searchArtists={searchArtists}
      searchActions={searchActions}
    /> 
  )
}

Main.propTypes = {
  searchAlbums: PropTypes.array.isRequired,
  searchArtists: PropTypes.array.isRequired,
  searchActions: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  // search
  searchAlbums: selectSearchAlbums,
  searchArtists: selectSearchArtists,
})

function mapDispatchToProps(dispatch) {
  return {
    searchActions: {
      ...bindActionCreators(searchActionsCreators.search, dispatch),
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
)(Main)

