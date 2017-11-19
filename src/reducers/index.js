import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import thunk from 'redux-thunk';
import index from './indexReducer'
import app from './appReducer'


export default combineReducers({
  routing:routerReducer,
  reduxAsyncConnect,
  index,
  app
});
