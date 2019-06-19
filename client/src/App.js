import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./components/post";
import Home from "./components/home";
import LogIn from "./components/login";
import SignUp from "./components/signUp"
import LandingPage from './components/landing.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
	  		<Switch>
	  			<Route exact path="/" component={LandingPage}/>
          <Route exact path="/posts" component={Post}/>
          <Route path="/posts/:id" component={Post}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/login" component={LogIn}/>
          <Route exact path="/signup" component={SignUp}/>
	  		</Switch>
  	</Router>
  );
}

export default App;
