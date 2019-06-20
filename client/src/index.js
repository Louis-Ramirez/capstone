import ReactDOM from 'react-dom';
import './styles/index.css';
import Navbar from './navbar'; 
import reducers from './reducers'
import reduxThunk from 'redux-thunk'; 
import { AUTHENTICATED } from './actions'; 
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/App.css';
import { applyMiddleware, createStore} from "redux"; 

/** nicole's imports */
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
//import store from './store';

//import { Provider } from 'react-redux';


//create the store using middleware 
const createStoreWithMiddleware = applyMiddleware(reduxThunk,)(createStore); 

//allowing reducer component to pass 
const store = createStoreWithMiddleware(reducers); 

const user = localStorage.getItem('user'); 
// if token is saved in localStorage, state needs to be changed to authenticated before rending 
if(user) {
    store.dispatch({ type: AUTHENTICATED }); 
}



{/* NICOLES CODEEEEEEEE *************************************************************/}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

{/* NICOLES CODEEEEEEEE *************************************************************/}
{/*ReactDOM.render(
    //passing store to be able to use connect() calls 
    <Provider store={store}>
     <Router> 
        
        <Switch>
            
            <Route exact path="/" component = {LandingPage} /> 
            <Route exact path="/signup" component = {noRequireAuth(SignUp)} /> 
            <Route exact path="/login" component = {noRequireAuth(login)} /> 
            <Route path="/signout" component={Signout} />
            <Route exact path="/home" component = {requireAuth(Home)} /> 
        </Switch>
    </Router>
</Provider> ,
    document.getElementById('root')
);  */}