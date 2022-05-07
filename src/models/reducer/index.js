import { combineReducers } from 'redux'
import launchReducer from './launchReducer'
import launchesReducer from './launchesReducer'

export default combineReducers({
  launchList: launchReducer,
  launchesList: launchesReducer,
})