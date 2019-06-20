import React, { Component } from 'react';
import LandingPage from './components/landing.js';
import Post from './components/post.js';
import Home from './components/home.js'
import signup from './components/signUp.js';
import login from './components/login.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/App.css';
import requireAuth from './components/authComponents.js/require_auth';
import noRequireAuth from './components/authComponents.js/no_require_auth';


class App extends Component {
  render(){
  	return(
  		<Router>
  			<Switch>
				 <Route exact path="/" component={LandingPage}/>
         <Route exact path="/home" component={requireAuth(Home)}/>
				 <Route exact path="/signup" component={noRequireAuth(signup)}/>
			   <Route exact path="/login" component={noRequireAuth(login)}/>
         <Route exact path="/post/:id" component={Post}/>
  			</Switch>
  		</Router>
  		)
  }
}
export default App;
