import React, { Component } from 'react';
import LandingPage from './landing.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render(){
  	return(
  		<Router>
  			<Route path="/" exact component={Landing}/>
  			<Route path="/signup" component={signUp}/>
  			<Route path="/login" component={LogIn}/>
  		</Router>
  		)
  }
}
export default App;