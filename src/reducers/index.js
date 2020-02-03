import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import tweets from './tweets'
import { loadingBarReducer } from 'react-redux-loading'

// Combine all reducers into one main, root reducer, which will combine the results of calling the tweets reducer, users reducer, and authedUser reducer into a single state object. 
// createStore function only accepts a single reducer.
export default combineReducers({
  authedUser,
  users,
  tweets,
  loadingBar: loadingBarReducer
})