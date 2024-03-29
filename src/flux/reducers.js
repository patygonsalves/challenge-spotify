import { combineReducers } from 'redux'
import authReducer from '../services/auth/reducers'

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers