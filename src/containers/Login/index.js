import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose, bindActionCreators } from 'redux'

// page
import LoginPage from '../../pages/Login'

// auth
import { selectAuth } from '../../flux/selectors'
import authActionsCreators from '../../actions/auth'


function Login({
  auth,
  authActions,
}) {
  return (
    <LoginPage auth={auth} authActions={authActions} /> 
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

