import React, { Component } from 'react';
import LandingPage from './components/landing.js';
import signup from './components/signUp.js';
import login from './components/login.js';
import Home from './components/home.js';
import Input from './components/createPostForm.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/App.css';
import Header from './components/header.js'

class App extends Component {
  render(){
  	return(
  		<Router>
        <div>
          <Header/>
          <Switch>
            <Route path="/" exact component={LandingPage}/>
    				<Route path="/signup" component={signup}/>
            <Route path="/login" component={login}/>
            <Route path="/home" component={Home} />
            <Route path="/posts" component={Input}/>
          </Switch>
        </div>
  		</Router>
  		)
  }
}
export default App;
