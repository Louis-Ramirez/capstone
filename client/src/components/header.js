import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../styles/header.css';
import LandingPage from './landing.js';
import Home from './home.js';

class Header extends Component {
	render(){
		return(
			<div className ="mainHeader">
				<ul>
					<div className="headerLinks">
						<li>
						<Link to="/"><img src = "https://useiconic.com/open-iconic/svg/puzzle-piece.svg" alt="puzzle piece"/>Jigsaw</Link>	
						</li>
						
						<li>
							<Link to="/home">
								<img src="https://useiconic.com/open-iconic/svg/home.svg" class="iconic iconic-lg" alt="home"/>
							</Link>
						</li>
						<div className="header-button-container">
						<li>
							<Link to = "/login">
								<button className = "logInButton" onClick = {this.handleSubmit} name = "logIn">Log In</button>
							</Link>
						</li>
						<li>
							<Link to = "/signup"><button className = "signUpButton" onClick = {this.handleSubmit} name = "signUp">Sign Up</button></Link>
						</li>
						</div>
					</div>
				</ul>
			</div>

		)
	}
}

export default Header;