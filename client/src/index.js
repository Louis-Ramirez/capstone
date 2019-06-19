import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddlware, applyMiddleware } from 'redux'; 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './navbar'; 
import Home from './home';
import Login from './login'; 
import Signout from './signout'; 
import Post from './post'
import SignUp from './signUp'; 
import reducers from './reducers'
import reduxThunk from 'redux-thunk'; 
import { AUTHENTICATED } from './actions'; 
import requireAuth from './require_auth'; 
import noRequireAuth from './no_require_auth'; 


//create the store using middleware 
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore); 

//allowing reducer component to pass 
const store = createStoreWithMiddleware(reducers); 

const user = localStorage.getItem('user'); 
// if token is saved in localStorage, state needs to be changed to authenticated before rending 
if(user) {
    store.dispatch({ type: AUTHENTICATED }); 
}

ReactDOM.render(
//passing store to be able to use connect() calls 
<Provider store={store}>
    <Router> 
        <Switch>
            <Navbar /> 
            <Route exact path="/" component = {Home} /> 
            <Route exact path="/signup" component = {noRequireAuth(SignUp)} /> 
            <Route exact path="/login" component = {noRequireAuth(Login)} /> 
            <Route path="/signout" component={Signout} />
            <Route exact path="/home" component = {requireAuth(Post)} /> 
        </Switch>
    </Router>
</Provider> ,
    //querySelector() returns the first element that matches the specified 
    document.getElementById('root')
); 
