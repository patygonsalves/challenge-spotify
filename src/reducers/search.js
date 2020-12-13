import { updateLocalStorage } from '../utils/localstorage'

const baseState = {
  search: [],
}

const recoveredState = JSON.parse(localStorage.getItem('spotify-search'))

export const initialState = recoveredState || baseState

function set(state, payload) {
  const newState = {
    ...state,
    search: payload,
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
