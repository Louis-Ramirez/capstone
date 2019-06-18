//post.js

import React, {Component} from 'react';
import './post.css';

class Post extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="five_postContainer">

        <div className="five_postTitle">
          <h2>Anderson Cooper & more remember Gloria Vanderbilt: "An American icon"</h2>
          <p>LAT Entertainment ~ 2 hours ago</p>
        </div>

        <div className="five_postBodyContainer">
          <p className="five_postBody">
          NEW YORK (AP) — Gloria Vanderbilt, the intrepid heiress, artist and romantic who began her
          extraordinary life as the "poor little rich girl" of the Great Depression, survived family
          tragedy and multiple marriages and reigned during the 1970s and '80s as a designer jeans pioneer,
          died Monday at the age of 95.
          </p>
        </div>

        <div className="five_postCommentContainer">
          <input type="text" name="commentBox" className="five_postCommentBox" placeholder="Insert comments here"/>
          <button className="five_commentButton">Submit</button>
        </div>


      </div>
    );
  }
}


export default Post
