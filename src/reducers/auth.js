import { updateLocalStorage, resetLocalStorage } from '../utils/localstorage'

const baseState = {
  loading: false,
  token: '',
}

const recoveredState = {
  loading: false,
  token: localStorage.getItem('token'),
}

export const initialState = recoveredState || baseState

function setUser(state, user) {
  let newState = { ...state }

  newState.token = user.token
  newState.loading = false

  resetLocalStorage()
  updateLocalStorage('token', user.token)

  return newState
}

function setToken(state, token) {
  let newState = { ...state }

  newState.token = token
  newState.loading = false

  updateLocalStorage('token', token)

  return newState
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'AUTH/LOGIN':
    case 'AUTH/REAUTHENTICATE':
      return {
        ...state,
        loading: true,
      }

    case 'AUTH/LOGOUT':
      return {
        ...state,
        loading: true,
      }

    case 'AUTH/SUCCESS':
      return setUser(state, payload)

    case 'AUTH/REAUTHENTICATE/SUCCESS':
      return setToken(state, payload)

    default:
      return state
  }
}

export default reducer
