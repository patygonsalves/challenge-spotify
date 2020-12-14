import { updateLocalStorage } from '../utils/localstorage'

const baseState = {
  albums: [],
  artists: [],
  tracks: [],
}

const recoveredState = JSON.parse(localStorage.getItem('spotify-search'))

export const initialState = recoveredState || baseState

function set(state, payload) {
  const newState = {
    ...state,
    albums: payload.albums,
    artists: payload.artists,
    tracks: [],
  }

  updateLocalStorage('spotify-search', JSON.stringify(newState))

  return newState
}

function setTracks(state, payload) {
  const newState = {
    ...state,
    tracks: payload.tracks,
  }

  updateLocalStorage('spotify-search', JSON.stringify(newState))

  return newState
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SEARCH/GET/INTENT':
      return set(state, payload)

    case 'SEARCH/TRACKS':
      return setTracks(state, payload)

    default:
      return state
  }
}

export default reducer
