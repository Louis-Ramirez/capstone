import React, { Component } from 'react';
import LandingPage from './components/landing.js';
import signup from './components/signUp.js';
import login from './components/login.js';
import Home from './components/home.js';
import CreatePost from './components/createPostForm.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/App.css';

class App extends Component {
  render(){
  	return(
  		<Router>
  			<Switch>
				<Route path="/" exact component={LandingPage}/>
				 <Route path="/signup" component={signup}/>
			    <Route path="/login" component={login}/>
                <Route path="/home" component={Home} />
  			</Switch>
  		</Router>
  		)
    // return(<LandingPage/>)
    //make a router
	//return(<CreatePost>)
}
}
export default App;