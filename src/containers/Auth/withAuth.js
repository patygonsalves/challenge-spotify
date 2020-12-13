import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router-dom'

// auth
import { selectAuth } from '../../flux/selectors'

function withAuth({
  component: WrappedComponent,
  auth
}) {
  return (
    auth.token ? <WrappedComponent /> : <Redirect to='/' /> 
  )
}

withAuth.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  // auth
  auth: selectAuth,
})

const withConnect = connect(
  mapStateToProps,
  {},
)

export default withConnect(withAuth)


