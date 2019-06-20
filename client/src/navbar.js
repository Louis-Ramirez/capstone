import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import './styles/index.css';

//using our authenticated state value to render proper menu items 
class navbar extends Component {
    navbarLinks(){
        //if user is logged in then we render signout and secret page links 
        if (this.props.authenticated) {
            return [
                <li key="home"><Link to="/home">home</Link></li>,
                <li key="signout"><Link to="/signout">Sign out</Link></li>
            ]; 
        }

        //else we direct user to sign in and sign up page 
        return [
            <li key="signin"><Link to="/login">Sign in</Link></li>,
            <li key="signup"><Link to="/signup">Sign up</Link></li>
        ]; 
    }


        render() {
            return (
            <nav className="navbar">
                <div className="container">
                <Link to="/"><span className="App">Post-replies</span></Link>
                <ul>
                    {this.navbarLinks()}
                </ul>
                </div>
            </nav>
            );
            }
        }

function mapStateToProps(state){
    return {
        authenticated: state.auth.authenticated
    }; 
}

export default connect(mapStateToProps)(navbar); 