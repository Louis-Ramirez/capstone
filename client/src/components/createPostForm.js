//createPostForm.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../styles/createPost.css";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CreatePost extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div className="campusBody">
          <h1>Create Post</h1>
          <p> Title</p>
          <p> Body</p>
        </div>
    );
  }
}

export default CreatePost
