import React, { Component } from 'react';
import LandingPage from './components/landing.js';
import Post from './components/post.js';
import Home from './components/home.js'
import CreatePost from './components/createPostForm.js'
import signup from './components/signUp.js';
import login from './components/login.js';
import SignOut from './components/signout.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './styles/App.css';
import requireAuth from './components/authComponents.js/require_auth';
import noRequireAuth from './components/authComponents.js/no_require_auth';
import Header from './components/header';


class App extends Component {
  render(){
  	return(
  		<Router>
          <Header />
  			<Switch>
				 <Route exact path="/" component={LandingPage}/>
         <Route exact path="/home" component={requireAuth(Home)}/>
				 <Route exact path="/signup" component={noRequireAuth(signup)}/>
			   <Route exact path="/login" component={noRequireAuth(login)}/>
         <Route exact path="/signout" component={noRequireAuth(SignOut)}/>
         <Route exact path="/createpost" component ={CreatePost}/>
         <Route exact path="/post/:id" component={Post}/>
  			</Switch>
  		</Router>
  		)
  }
}
export default App;
