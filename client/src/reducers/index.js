
import { combineReducers } from 'redux'; 
import { reducer as formReducer } from 'redux-form'; 
import { reducer as signUpReducer } from 'redux-form'; 
import authReducer from './auth_reducer'; 


const rootReducer = combineReducers({
    form: formReducer, //returns login
    auth: authReducer , //handles whether user is authenticated 
    signUp: signUpReducer
}); 

export default rootReducer; 
export { default as postReducer } from '../store/utilities/actionPost';

// export { default as homeReducer } from '../store/utilities/actionHome';


// this file is imported into the store/index.js

// in your html component rendering --> this.props.state.whateverYouWant
// this.reduxstore.postReducer

// function mapStateToProps(state){
//   return {
//     whateverYouWant: state.postReducer
//   };
// }
