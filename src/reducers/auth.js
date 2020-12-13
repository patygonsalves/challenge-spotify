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

function reset() {
  resetLocalStorage()
  return baseState
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'AUTH/LOGIN':
      return {
        ...state,
        loading: true,
      }

    case 'AUTH/LOGOUT':
      return reset()

    case 'AUTH/SUCCESS':
      return setUser(state, payload)

    default:
      return state
  }
}

export default reducer
