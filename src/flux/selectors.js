import { initialStateAuth } from '../reducers/auth'
import { initialStateSearch } from '../reducers/search'

const domainAuth = state => state.auth || initialStateAuth

const domainSearch = state => state.search || initialStateSearch

const selectAuth = state => domainAuth(state)

const selectSearch = state => domainSearch(state).search

export { selectAuth, selectSearch }
