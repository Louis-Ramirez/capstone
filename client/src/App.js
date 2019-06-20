import React, { Component } from 'react';
import LandingPage from './components/landing.js';
import signup from './components/signUp.js';
 import login from './components/login.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/App.css';
import Header from './components/header.js'

class App extends Component {
  render(){
  	return(
      <div>
  		<Router>
            <Header/>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
				<Route path="/signup" component={signup}/>
        <Route path="/login" component={login}/>
        <Route path="/home" component={Home} />
  			</Switch>
  		</Router>
      </div>
  		)
  }
}
export default App;
