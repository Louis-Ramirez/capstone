import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {addNewPostThunk} from '../actions/actionPost';
import "../styles/home.css";

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(e){
      e.preventDefault();
      const post ={
          title: this.refs.postTitle.value,
          body: this.refs.postBody.value
      };

      console.log("----- sending out this post ------- ",post);
      console.log("----- our userId-----", this.props);
      this.props.addPost(post, this.props.userId);
      // <iframe src={this.props.gifUrl} key={this.props.id} className="giphy-embed" allowFullScreen></iframe>
  }

  render() {
    console.log(this.props.history);
      return(
        <div className="three_individual">
          <form onSubmit={this.onHandleSubmit} >
            <div className="form-group">
              <input
                type="text"
                name="title"
                placeholder="Enter title for your post"
                ref="postTitle"
                className="form-control"
              />
            </div>
            <div className="form-group">
                <input
                type ="text"
                name = "body"
                placeholder="Enter description about post"
                ref="postBody"

                />
            </div>
            <button className="btn btn-primary">Save</button>
          </form>
      </div>
    );
  }
}


// Map state to props;
function mapState(state) {
  return {
    currentPost: state.post
  }
}
function mapDispatch(dispatch) {
  return {
    addPost: (post, userId) => dispatch(addNewPostThunk(post, userId)),
  }
}


export default connect(mapState, mapDispatch)(CreatePost);
