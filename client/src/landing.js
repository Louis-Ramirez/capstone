import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

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
			return <Redirect to = "/signUp"/>
			// return <Redirect to = "/signUp"/>
		} else if(event.target.name ==="logIn"){
			return <Redirect to = "logIn"/>
		}
	}
	render()
	{
		return(
			<div>
				<div className="descripContainer">
					<div>
						<table align = "center">
							<tr>
								<td>Logo</td>
								<td>Description</td>
							</tr>
							<tr>
								<td>Logo</td>
								<td>Description</td>
							</tr>
							<tr>
								<td>Logo</td>
								<td>Description</td>
							</tr>
						</table>
					</div>
				</div>
				
				<div className="formContainer">
					<div className="signUpHeader">
						<img src = ""/>
						<button>Log in</button>
					</div>
					
					<div><h1>See what's happening in the world right now!</h1></div>

					<div className="signUpForm">
						<button className = "signUpButton" onClick = {this.handleSubmit} name = "signUp">Sign Up</button>
						<button className = "logInButtin" onClick = {this.handleSubmit} name = "logIn">Log in</button>
					</div>
					
				</div>
			</div>
		)
	}
}

export default LandingPage;
