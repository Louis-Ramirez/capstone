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

	handleSubmit(event){
		//if "Sign Up" is clicked
		//redirect user to signUp.js
		if(this.state.toSignUp === true) {

			return <Redirect to = '.../signUp.js'/>
		}
		
		//if "Log In" is clicked
		//redirect user to login.js
		if(this.state.toLogIn === true){

			return <Redirect to = '.../login.js'/>
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
						<button className = "signUpButton" onClick = {this.handleSubmit} >Sign Up</button>
						<button className = "logInButtin" onClick = {this.handleSubmit} >Log in</button>
					</div>
					
				</div>
			</div>
			)
	}
}

export default LandingPage;
