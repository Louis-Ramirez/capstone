
import ReactDOM from 'react-dom';
import './styles/index.css';
import Navbar from './navbar'; 
import reducers from './reducers'
import reduxThunk from 'redux-thunk'; 
import { AUTHENTICATED } from './actions'; 
import requireAuth from './components/authComponents.js/require_auth'; 
import noRequireAuth from './components/authComponents.js/no_require_auth'; 
import React, { Component } from 'react';
import LandingPage from './components/landing.js';
import signUp from './components/signUp'; 
import login from './components/login.js';
import Home from './components/home.js';
import Signout from './components/signout';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/App.css';
import { applyMiddleware, createStore} from "redux"; 
import { Provider } from 'react-redux';


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
            
            <Route exact path="/" component = {LandingPage} /> 
            <Route exact path="/signup" component = {noRequireAuth(signUp)} /> 
            <Route exact path="/login" component = {noRequireAuth(login)} /> 
            <Route path="/signout" component={Signout} />
            <Route exact path="/home" component = {requireAuth(Home)} /> 
        </Switch>
    </Router>
</Provider> ,
    //querySelector() returns the first element that matches the specified 
    document.getElementById('root')
); 