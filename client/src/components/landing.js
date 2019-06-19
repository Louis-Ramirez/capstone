import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/landing.css';

//Component that displays the landing page
class LandingPage extends Component {
	constructor(props){
		super(props)
		this.state = {
			toSignUp: false,
	// return(<signUp  submit={this.handlesubmit}/>)
		}
	}
	handleSubmit = (event) => {
		if(event.target.name === "signUp"){
			return <Link to = "/api/users/signup"/>
		} else if(event.target.name ==="logIn"){
			return <Link to = "/api/users/login"/>
		}
	}
	render()
	{
		return(
			<div>
				<div className="split left">
					<div className = "centered">
						<table>
							<tr>
								<img src="https://useiconic.com/open-iconic/svg/layers.svg" width = "20" align = "middle"/>
								<td>Follow your interests.</td>
							</tr>
							<tr>
								<img src="https://useiconic.com/open-iconic/svg/people.svg" width = "20" align = "middle"/>
								<td>Hear what people are talking about.</td>
							</tr>
							<tr>
								<img src="https://useiconic.com/open-iconic/svg/link-intact.svg" width = "20" align = "middle"/>
								<td>Join the conversation.</td>
							</tr>
						</table>
					</div>
				</div>
				
				<div className="split right ">
					<div className= "centered">
<<<<<<< HEAD
=======
						<div className="signUpHeader">
							<div>
								<img src = "https://useiconic.com/open-iconic/svg/puzzle-piece.svg" width = "50" align = "left"/>							</div>	
								<h1>Piece together the world.</h1>
							</div>
						<div className="signUpForm">
							<h2>Join Jigsaw today!</h2>
							<button className = "signUpButton" onClick = {this.handleSubmit} name = "signUp">Sign Up</button>
							<Link to = "/signup"><button className = "logInButton" onClick = {this.handleSubmit} name = "logIn">Log in</button></Link>
>>>>>>> 70df8cad007cdcdd2bd3da3d6b80feae42bfcba7
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}

export default LandingPage;
