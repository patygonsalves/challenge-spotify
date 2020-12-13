import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose, bindActionCreators } from 'redux'

// page
import MainPage from '../../pages/Main'

// search
import { selectSearch } from '../../flux/selectors'
import searchActionsCreators from '../../actions/search'


function Main({
  search,
  searchActions,
}) {
  return (
    <MainPage search={search} searchActions={searchActions} /> 
  )
}

Main.propTypes = {
  search: PropTypes.array.isRequired,
  searchActions: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  // search
  search: selectSearch,
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

