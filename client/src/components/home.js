//home.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../styles/home.css";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchAllPostsThunk, addNewPostThunk } from '../actions/actionPost';
import like from '../imgs/like.png';
import dislike from '../imgs/dislike.png'
import CreatePost from './createPostForm';

class Home extends Component{
  constructor(props){
      super(props);
      this.state={
          id: '',
          username: '',
          email: '',
          imageUrl: '',
          createPost: false,
          sideBar: false
      }

  }

  componentDidMount() {
    console.log("in mount ");
    this.props.getAllPost();
    if(this.props.history.location.state === undefined){
      console.log("user not sent");
    }
    else {
      let user = this.props.history.location.state.user;
      console.log(user);
      this.setState({...this.state,
        id: user.id,
        username: user.username,
        imageUrl: user.imageUrl,
        email: user.email
      });
   }
   console.log("---- after setting user id -----", this.state.id)
  }

  renderForm = () =>{
      this.setState({createPost: true});
  }
  closeForm = () => {
      this.setState({createPost: false});
  }
  showSidebar = () => {
    console.log("---onMouseEnter----", this.state.sideBar);
        this.setState({sideBar: true})
  }

  hideSideBar = () =>{
    console.log("---onMouseLeave----", this.state.sideBar);
      this.setState({sideBar: false});
  }


  sideBarView = () => (
      <div className="three_sidebar" onMouseLeave={this.hideSideBar} >
      <div className="three_credentials three_sideSub">
          <img src={this.state.imageUrl} alt={this.state.username}/>
          <h3>{this.state.username}</h3>
      </div>
      <div className="three_createPostBtn three_sideSub">
              <button id="three_createPost" onClick={this.renderForm}>Create Post</button>
      </div>
  </div>
  )


  render(){
    // const showHide = this.state.createPost ? "three_form display-block" : "three_form  display-none";
    if(this.props.postReducer.length === 0){
      return(
          <div className="three_wrapper">

            <div className="three_main">


              <div className="three_list">
                <p> Recent: </p>
                <p>There are no posts</p>
              </div>
            </div>

              {this.state.sideBar ? this.sideBarView() : <div  id="three_default" onMouseEnter={this.showSidebar}> </div> }

          </div>
      );
    } else if(this.state.createPost){

      return(
          <div className="three_wrapper">

            <div className="three_main">
              

              <div className="three_list">
                  <CreatePost userId={this.state.id}/>
                  <button onClick={this.closeForm}>Cancel</button>
              </div>
            </div>

              {this.state.sideBar ? this.sideBarView : <div  id="three_default" onMouseEnter={this.showSidebar}> </div> }

          </div>
      );

    } else {
      return(
          <div className="three_wrapper">
            <div className="three_main">
              

              <div className="three_list">
                <p> Recent: </p>

                {this.props.postReducer.map((p) => {
                  return(
                    <div className="three_individual">
                        <Link to={'/post/'+ p.id} style={{textDecoration: 'none'}}>
                            <span><h3>{p.title}</h3></span>
                        </Link>
                        <p><img src={like} alt="like" style={ {height: 30}}/>{" "}
                        <img src={dislike} alt="dislike" style={ {height: 30}}/></p>
                    </div>
                  )
                })}
              </div>
            </div>


              {this.state.sideBar ? this.sideBarView : <div  id="three_default" onMouseEnter={this.showSidebar}> </div> }

          </div>
      );
    }


  }
}

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
    getAllPost: () => dispatch(fetchAllPostsThunk())
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);

