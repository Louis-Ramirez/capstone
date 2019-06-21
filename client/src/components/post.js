//post.js

import React, {Component} from 'react';
import '../styles/post.css';
import '../styles/home.css';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchAllPostsThunk, addNewPostThunk, fetchAllPostCommentsThunk, fetchPostByIdThunk, addCommentFromPostThunk } from '../actions/actionPost';


class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sideBar: false,
            comments: []
        }
    }

    setComment() {
      if(this.props.postReducer !== 0 && this.props.postReducer.data !== undefined){
        return(
          this.props.postReducer.data.Comments.slice(0).reverse().map(element =>
            <div className="five_eachUserCommentBox">
              <p>{element.body}</p>
            </div>
          )
        )
      } else {
        return (
          <p>Be the first to comment!</p>
        )
      }
    }

    addComment = (event) => {
      event.preventDefault();
      let comment = {
        postId: this.props.match.params.id,
        body: this.refs.comment.value
      }

      this.props.addCommentFromPost(comment);
      window.location.reload();
    }

    componentDidMount() {
      console.log(this.props);
      this.props.getPostById(this.props.match.params.id);
    }

    showSidebar = () => {
          this.setState({sideBar: true})
    }

    hideSideBar = () =>{
        this.setState({sideBar: false});
    }

    /*sideBarView = (
        <div className="three_sidebar" onMouseLeave={this.hideSideBar} >
        <div className="three_credentials three_sideSub">
            <img src="https://data.whicdn.com/images/320568210/large.jpg" alt="Cartoon Girl"/>
            <h3> Cartoon Girl</h3>
        </div>
    </div>
    ) */

    renderNoPostView(){
      return(
        <p>There are no post for this</p>
      );
    }

    renderPostView(){
      return(
          <div className="three_wrapper" >
              <div className="three_main">
                  <div className="five_postContainer">

                    <div className="five_postTitle">
                      <h2>{this.props.postReducer.data.title}</h2>
                      <p>LAT Entertainment ~ {this.props.postReducer.data.createdAt}</p>
                    </div>

                    <div className="five_postBodyContainer">
                      <p className="five_postBody">
                       {this.props.postReducer.data.body}
                      </p>
                    </div>

                    <div className="five_postCommentContainer">
                      <input type="text" name="commentBox" className="five_postCommentBox" placeholder="Insert comments here" ref="comment" required/>
                      <div className="five_buttonBox">
                        <button className="five_commentButton"onClick={this.addComment}>Submit</button>
                      </div>
                    </div>
                    {this.setComment()}

                  </div>

              </div>
             {/* {this.state.sideBar ? this.sideBarView : <div  id="three_default" onMouseEnter={this.showSidebar}> </div> } */}

          </div>
      )
    }

    render(){
      console.log(this.props.match.params.id);
      if(this.props.postReducer !== 0 && this.props.postReducer.data !== undefined){
        return this.renderPostView();
      } else {
        return this.renderNoPostView();
      }

    }
}


// takes state which is part of store and sends it into props
// allcampus is from reducer/index.js
function mapStateToProps(state){
  return {
    postReducer: state.post
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
    getPostById: (postId) => dispatch(fetchPostByIdThunk(postId)),
    addCommentFromPost: (comment) => dispatch(addCommentFromPostThunk(comment))
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Post);
// export default connect(null, matchDispatchToProps)(Post);
