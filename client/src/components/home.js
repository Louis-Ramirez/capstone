//home.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../styles/createPost.css";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchAllPostsThunk, addNewPostThunk } from '../thunks';

class Home extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log("in mount ");
    this.props.getAllPost();
  }

  render(){
    console.log("***********", this.props.postReducer);
    return(
        <div className="campusBody">
          <h1>HomePage</h1>
          <p> Account Information</p>
          <p> All Posts</p>

          {this.props.postReducer.map((p) => {
            console.log(p);
            return(
              <div>
                  <h3>{p.title}</h3>
              </div>
            )
          }

          )}
        </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state);
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
    getAllPost: () => dispatch(fetchAllPostsThunk())
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
