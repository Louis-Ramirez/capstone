import React from 'react';
import './styles/App.css'
import Post from "./components/post";
import Home from "./components/home";
import login from "./components/login";
import SignUp from "./components/signUp"
import LandingPage from './components/landing.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import requireAuth from './components/authComponents.js/require_auth'; 
import noRequireAuth from './components/authComponents.js/no_require_auth'; 
import Signout from './components/signout';

function App() {
  return (
    <Router>
	  		<Switch>
	  			<Route exact path="/" component={LandingPage}/>
          <Route exact path="/posts" component={Post}/>
          <Route path="/posts/:id" component={Post}/>
          <Route exact path="/home" component = {requireAuth(Home)} /> 
          <Route exact path="/login" component = {noRequireAuth(login)}/>
          <Route exact path="/signup" component = {noRequireAuth(SignUp)}/> 
          <Route path="/signout" component={Signout} />
	  		</Switch>
  	</Router>
  );
}

export default App;





