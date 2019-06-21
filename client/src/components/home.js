//home.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../styles/home.css";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchAllPostsThunk, addNewPostThunk,saveUserThunk } from '../actions/actionPost';
import like from '../imgs/like.png';
import dislike from '../imgs/dislike.png'
import CreatePost from './createPostForm';

class Home extends Component{
  constructor(props){
      super(props);
      this.state={
          createPost: false,
          sideBar: false
      }

  }

  componentDidMount() {
    console.log(this.props);
    this.props.getAllPost();
    if(this.props.history.location.state === undefined){
      console.log("undefined reloading");
      //window.location.reload();
    }
    else {
      console.log(this.props);
      console.log("defined calling action")
      let user = this.props.history.location.state.user;

      console.log("----------User--------",user);
      //let user = {}
      this.props.saveUser(user);
     /* this.setState({...this.state,
        id: user.id,
        username: user.username,
        imageUrl: user.imageUrl,
        email: user.email
      }); */
  
   }
   console.log("---- after setting user id -----", this.state.id);

   
  }

  renderForm = () =>{
      this.setState({createPost: true});
  }
  closeForm = () => {
      this.setState({createPost: false});
      window.location.reload();
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
      <div className="three_sidebar" >
      <div className="three_credentials three_sideSub">
          <img src={this.props.user.imageUrl} alt={this.props.user.username}/>
          <h3>{this.props.user.username}</h3>
          <p>{this.props.user.email}</p>
      </div>
      <div className="three_createPostBtn three_sideSub">
              <button id="three_createPost" onClick={this.renderForm}>Create Post</button>
      </div>
  </div>
  )


  render(){
    console.log("render", this.props.user, this.state);
    // const showHide = this.state.createPost ? "three_form display-block" : "three_form  display-none";
    if( this.props.postReducer.length === 0){
      return(
          <div className="three_wrapper">

            <div className="three_main">
              <header>
                <h1>Welcome</h1>
                <Link to="/signout"><button>sign out</button></Link>
              </header>


              <div className="three_list">
                <p> Recent: </p>
                <p>There are no posts</p>
              </div>
            </div>

              {/*{this.state.sideBar ? this.sideBarView() : <div  id="three_default" onMouseEnter={this.showSidebar}> </div> } */}
              {this.sideBarView()}

          </div>
      );
    } else if(this.state.createPost){

      return(
          <div className="three_wrapper">

            <div className="three_main">
              

              <div className="three_list">
                  <CreatePost userId={this.props.user.id}/>
                  <button onClick={this.closeForm}>Close</button>
              </div>
            </div>

              {/*{this.state.sideBar ? this.sideBarView() : <div  id="three_default" onMouseEnter={this.showSidebar}> </div> } */}
              {this.sideBarView()}

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


              {/*{this.state.sideBar ? this.sideBarView() : <div  id="three_default" onMouseEnter={this.showSidebar}> </div> } */}
              {this.sideBarView()}

          </div>
      );
    }


  }
}

function mapStateToProps(state){
  return {
    postReducer: state.post,
    user: state.user
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
    saveUser: (user) => dispatch(saveUserThunk(user))
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);

