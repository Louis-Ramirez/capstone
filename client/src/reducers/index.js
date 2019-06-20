import { combineReducers } from 'redux'; 
import { reducer as formReducer } from 'redux-form'; 
import authReducer from './auth_reducer'; 
import signUpReducer from './signUp';

const rootReducer = combineReducers({
    form: formReducer, //returns login
    auth: authReducer , //handles whether user is authenticated 
    signUp: signUpReducer
}); 

export default rootReducer; 