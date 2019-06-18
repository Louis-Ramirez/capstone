import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './landing.css';

//Component that displays the landing page
class LandingPage extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			toSignUp: false,
			toLogIn: false
		};
	};

	handleSubmit = (event) => {
		console.log(event.target.name)
		if(event.target.name === "signUp"){
			return <Redirect to = "/signup"/>
			// return <Redirect to = "/signUp"/>
		} else if(event.target.name ==="logIn"){
			return <Redirect to = "login"/>
		}
	}
	render()
	{
		return(
			<div>
				<div className="split left">
					<div className = "centered">
						<table align = "center">
							<tr>
								<td>Logo</td>
								<td>Follow your interests.</td>
							</tr>
							<tr>
								<td>Logo</td>
								<td>Hear what people are talking about.</td>
							</tr>
							<tr>
								<td>Logo</td>
								<td>Join the conversation.</td>
							</tr>
						</table>
					</div>
				</div>
				
				<div className="split right ">
					<div className= "centered">
						<div className="signUpHeader">
							<img src = ""/>
							<button>Log in</button>
							<h1>See what's happening in the world right now!</h1>
						</div>

						<div className="signUpForm">
							<button className = "signUpButton" onClick = {this.handleSubmit} name = "signUp">Sign Up</button>
							<button className = "logInButton" onClick = {this.handleSubmit} name = "logIn">Log in</button>
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}

export default LandingPage;
