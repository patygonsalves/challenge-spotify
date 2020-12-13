import { combineReducers } from 'redux'

// reducers
import authReducer from './auth'
import searchReducer from './search'

const reducers = combineReducers({
  auth: authReducer,
  search: searchReducer,
})

export default reducers
