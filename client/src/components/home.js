//home.js

import React from 'react';
import {Link} from 'react-router-dom';
import like from '../imgs/like.png';
import dislike from '../imgs/dislike.png'
import '../styles/home.css';
import Input from './createPostForm';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: " ",
            username: " ",
            imageUrl: " ",
            email: " ",
            createPost: false,
            sideBar: false
        }
    }

    componentDidMount () {
        console.log(this.props);
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
}
    
    renderForm = () =>{
        this.setState({createPost: true});
    }
    closeForm = () => {
        this.setState({createPost: false});
    }
    showSidebar = () => {
          this.setState({sideBar: true})
    }

    hideSideBar = () =>{
        this.setState({sideBar: false});
    }

    sideBarView = () => (
        <div className="three_sidebar" onMouseLeave={this.hideSideBar} >
        <div className="three_credentials three_sideSub">
            <img src={this.state.imageUrl} alt="User"/>
            <h3>{this.state.username}</h3>
            <p>{this.state.email}</p>
        </div>
        <div className="three_createPostBtn three_sideSub">
                <button id="three_createPost" onClick={this.renderForm}>Create Post</button>
        </div>
    </div>
    )


   /* TempForm = (
        <div  className="three_form" >
        <form  onSubmit={this.closeForm} className="modal-main" >
            <label>Title</label>
            <br />
            <input type="text" name="title" />
            <br/>
            <label>Body</label>
            <br />
            <input type="text" name="body" id="three_body" />
            <br/>
            <input type="submit" value="submit"/>
        </form>
        </div>
    )*/
    

    render(){
        console.log(this.state);
        const showHide = this.state.createPost ? "three_form display-block" : "three_form  display-none";
        const questions = ["Why is the sky blue ?", "Can we teach dogs to talk ?", "How many jelly beans can fit into the pacific ocean ?", "What is the best Island to vacation on ?", " Who was the greatest man alive ?"];
        const postList = questions.map(post => {
            return(
            <div className="three_individual">
                {post}  
                <p><img src={like} alt="like" style={ {height: 30}}/>{" "}
                <img src={dislike} alt="dislike" style={ {height: 30}}/></p>
            </div>
        )});
        return(
            <div className="three_wrapper" >
                <div className="three_main">
                    <header>
                        <h1>Welcome</h1>
                        <Link to="/signout"><button>sign out</button></Link>
                    </header>
                    {this.state.createPost ? <div className={showHide} ><Input/></div>: <div></div>}
                    {/*<CreatePost show={this.state.createPost} handleClose={this.closeForm} /> */}
                    <div className="three_list">
                        <h3>Recent: </h3>
                        {postList}
                    </div>
                </div>
                {this.state.sideBar ? this.sideBarView() : <div  id="three_default" onMouseEnter={this.showSidebar}> </div> }

            </div>
        )
    }
}

export default Home;
