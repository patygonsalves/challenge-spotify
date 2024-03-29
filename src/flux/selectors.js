import { initialStateAuth } from '../reducers/auth'
import { initialStateSearch } from '../reducers/search'

const domainAuth = state => state.auth || initialStateAuth

const domainSearch = state => state.search || initialStateSearch

const selectAuth = state => domainAuth(state)

const selectSearchAlbums = state => domainSearch(state).albums

const selectSearchArtists = state => domainSearch(state).artists

const selectSearchTracks = state => domainSearch(state).tracks

export { selectAuth, selectSearchAlbums, selectSearchArtists, selectSearchTracks }
