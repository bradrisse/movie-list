import { combineReducers } from 'redux'
import movieReducer from './movies'

export default combineReducers({
    movies: movieReducer
});
