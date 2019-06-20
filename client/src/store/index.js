import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import allReducers from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';


// Individual reducers altogether under an alias;
import * as allReducers from '../reducers';
const rootReducer = combineReducers(allReducers);

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
let store = createStore(rootReducer, middleware,);

export default store;
