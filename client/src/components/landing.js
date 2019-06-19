import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/landing.css';

//Component that displays the landing page
class LandingPage extends Component {

	render()
	{
		return(
			<div>
				<div className="split left">
					<div className = "centered">
						<table>
							<tbody>
								<tr>
									<img src="https://useiconic.com/open-iconic/svg/layers.svg" alt = "layer img" width = "20" align = "middle"/>
									<td>Follow your interests.</td>
								</tr>
								<tr>
									<img src="https://useiconic.com/open-iconic/svg/people.svg" alt = "people img" width = "20" align = "middle"/>
									<td>Hear what people are talking about.</td>
								</tr>
								<tr>
									<img src="https://useiconic.com/open-iconic/svg/link-intact.svg" alt = "link img" width = "20" align = "middle"/>
									<td>Join the conversation.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				
				<div className="split right ">
					<div className= "centered">
						<div className = "signUpHeader">
							<img src = "https://useiconic.com/open-iconic/svg/puzzle-piece.svg" alt = "puzzle piece" width = "50" align = "left"/>
							<h1>Piece together the world.</h1>
						</div>
						<div className = "signUpForm">
							<Link to = "/login">
								<button className = "logInButton" onClick = {this.handleSubmit} name = "logIn">Log In</button>
							</Link>
							<Link to ="/signup">
								<button className = "signUpButton" onClick = {this.handleSubmit} name = "signUp">Sign Up</button>
							</Link>	
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default LandingPage;