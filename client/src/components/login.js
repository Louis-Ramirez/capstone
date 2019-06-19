//login.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../styles/createPost.css";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Login extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div className="campusBody">
          <h1>Log In</h1>
          <p>username</p>
          <p>password</p>
        </div>
    );
  }
}

export default Login
