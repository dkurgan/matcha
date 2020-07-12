import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
const initialState = {};

export default createStore(reducers, initialState, applyMiddleware(thunk));
