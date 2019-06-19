//post.js

import React, {Component} from 'react';
import '../styles/post.css';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchAllPostsThunk, addNewPostThunk, fetchAllPostCommentsThunk } from '../thunks';


class Post extends Component{
  constructor(props){
    super(props);
    this.state = {
      sideBar: false
    }

  }
  toggleSideBar = () => {
    this.setState({sideBar: !this.state.sideBar});
  }
  sideBarView = (
    <div className="three_sidebar" onMouseLeave={this.toggleSideBar}>
      <div className="three_credentials three_sideSub">
            <img src="https://data.whicdn.com/images/320568210/large.jpg" alt="Cartoon Girl"/>
            <h3> Cartoon Girl</h3>
        </div>
    </div>
  )

  setComment() {
    let arr = [1,2,3];
    if(this.props.postReducer !== 0 && this.props.postReducer.data !== undefined){
      return(
        this.props.postReducer.data.map(element =>
          <div className="five_eachUserCommentBox">
            <p>{element.body}</p>
          </div>
        )
      )

    }
  }

  componentDidMount() {
    this.props.getAllPostComments(4);
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
        {this.setComment()}

        {this.state.sideBar ? this.sideBarView : <div  id="five_default" onMouseEnter={this.toggleSideBar}> </div> }
      </div>

    );
  }
}


// takes state which is part of store and sends it into props
// allcampus is from reducer/index.js
function mapStateToProps(state){
  return {
    postReducer: state.postReducer
  };
}

// pass functions as to props in order to call props.addNewCampus
// function matchDispatchToProps(dispatch){
//   return bindActionCreators({ addNewCampus: fetchCampusThunk}, dispatch);
// }


// Map dispatch to props;
function matchDispatchToProps(dispatch) {
  return {
    addNewPost: (post, userId) => dispatch(addNewPostThunk(post, userId)),
    getAllPost: () => dispatch(fetchAllPostsThunk()),
    getAllPostComments: (postId) => dispatch(fetchAllPostCommentsThunk(postId)),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Post);
// export default connect(null, matchDispatchToProps)(Post);
