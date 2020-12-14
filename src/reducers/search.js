import { updateLocalStorage } from '../utils/localstorage'

const baseState = {
  albums: [],
  artists: [],
}

const recoveredState = JSON.parse(localStorage.getItem('spotify-search'))

export const initialState = recoveredState || baseState

function set(state, payload) {
  const newState = {
    ...state,
    albums: payload.albums,
    artists: payload.artists,
  }

  updateLocalStorage('spotify-search', JSON.stringify(newState))

  return newState
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SEARCH/GET/INTENT':
      return set(state, payload)

    default:
      return state
  }
}

export default reducer
