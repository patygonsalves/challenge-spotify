import { initialState } from '../reducers/auth'

const domain = state => state.auth || initialState

const selectAuth = state => domain(state)

export { selectAuth }
