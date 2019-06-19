//signUp.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../styles/createPost.css";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div className="campusBody">
          <h1>Sign Up</h1>
          <p>username</p>
          <p>password</p>
          <p>confirm password</p>
          <p>image</p>
        </div>
    );
  }
}

export default Home
