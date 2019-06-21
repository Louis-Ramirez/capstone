import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as signUpReducer } from 'redux-form';
import authReducer from './auth_reducer';
import postReducer from './post_reducer';
import userReducer from './userReducer';


export const rootReducer = combineReducers({
    form: formReducer, //returns login
    auth: authReducer , //handles whether user is authenticated
    signUp: signUpReducer,
    post: postReducer, 
    user: userReducer
});

// export default rootReducer;


// my file
// export { default as postReducer } from '../store/utilities/actionPost';


// these reducers are then imported into store/index.js
// import * as allReducers from '../reducers';
// const rootReducer = combineReducers(allReducers);
//
// // Create a Redux store holding the state of your app.
// // Its API is { subscribe, dispatch, getState }.
// const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
// let store = createStore(rootReducer, middleware,);
