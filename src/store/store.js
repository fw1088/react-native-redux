import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as Main from './Main/reducer'

let store = createStore(
  combineReducers({...Main}),
  applyMiddleware(thunk)
);

export default store;