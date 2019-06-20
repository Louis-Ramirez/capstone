import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../styles/header.css';
import LandingPage from './landing.js';
import Home from './home.js';

class Header extends Component {
	render(){
		return(
			<div className ="mainHeader">
				 <Link to="/"><img src = "https://useiconic.com/open-iconic/svg/puzzle-piece.svg" class="iconic iconic-lg" alt="puzzle piece" width="50"/></Link>
					<div className="headerLinks">
							
							<Link to="/home">
								<img src="https://useiconic.com/open-iconic/svg/home.svg" class="iconic iconic-lg inverted" alt="home"width="40"/>
							</Link>
	
						<div className="header-button-container">
				
							<Link to = "/login">
								<button className = "logInButton" onClick = {this.handleSubmit} name = "logIn">LOG IN</button>
							</Link>
							<Link to = "/signup"><button className = "signUpButton" onClick = {this.handleSubmit} name = "signUp">SIGN UP</button></Link>
						</div>
					</div>
			</div>

		)
	}
}

export default Header;