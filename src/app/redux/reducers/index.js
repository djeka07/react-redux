import { combineReducers } from 'redux'
import home from './home/homeReducer'
import app from './app/appReducer'
import { APPNAME, HOMENAME } from '../types'

const reduxState = combineReducers({
  [APPNAME]: app,
  [HOMENAME]: home
})

export default reduxState;
