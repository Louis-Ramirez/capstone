import React, { Component } from 'react';
import LandingPage from './landing.js';
import CreatePost from './createPostForm.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render(){
  	return(
  		<Router>
	  		<div>
	  			<Route exact path="/" component={Home}/>
	  			<Route path="/signUp" component={SignUp}/>
	  			<Route path="/logIn" component={LogIn}/>
	  		</div>
  		</Router>
  		)
    // return(<LandingPage/>)
    //make a router
	//return(<CreatePost>)
}
}
export default App;