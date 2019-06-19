import React, { Component } from 'react';
<<<<<<< HEAD
import LandingPage from './landing.js';
import CreatePost from './createPostForm.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
=======
import LandingPage from './components/landing.js';
import signup from './components/signUp.js';
import login from './components/login.js';
import Home from './components/home.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/App.css';
>>>>>>> 70df8cad007cdcdd2bd3da3d6b80feae42bfcba7

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
<<<<<<< HEAD
    // return(<LandingPage/>)
    //make a router
	//return(<CreatePost>)
}
=======
  }
>>>>>>> 70df8cad007cdcdd2bd3da3d6b80feae42bfcba7
}
export default App;