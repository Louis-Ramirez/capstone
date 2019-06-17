//home.js

import React from 'react';
import './home.css'
import CreatePostForm from './createPostForm';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            imageUrl: '',
            createPost: false,
            sideBar: false
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

    sideBar = () => {
        return (
        <div className="three_sidebar" onClick={this.hideSideBar}>
        <div className="three_credentials three_sideSub">
            <img src="https://data.whicdn.com/images/320568210/large.jpg" alt="Cartoon Girl"/>
            <h3> Cartoon Girl</h3>
        </div>
        <div className="three_createPostBtn three_sideSub">
                <button id="three_createPost" onClick={this.renderForm}>Create Post</button>
        </div>
    </div>
    )
    }

    render(){
        const questions = ["Why is the sky blue ?", "Can we teach dogs to talk ?", "How many jelly beans can fit into the pacific ocean ?", "What is the best Island to vacation on ?", " Who was the greatest man alive ?"];
        const postList = questions.map(post => {
            return(
            <div className="three_individual">
                {post} 
            </div>
        )});
        return(
            <div className="three_wrapper" >
                <div className="three_main">
                    <header>
                        <h1>Welcome</h1>
                    </header>
                    {/*<CreatePost show={this.state.createPost} handleClose={this.closeForm} /> */}
                    <div className="three_list">
                        <h3>Recent: </h3>
                        {postList}
                    </div>
                </div>
                {this.state.sideBar ? <div className="three_sidebar" onClick={this.hideSideBar}>
        <div className="three_credentials three_sideSub">
            <img src="https://data.whicdn.com/images/320568210/large.jpg" alt="Cartoon Girl"/>
            <h3> Cartoon Girl</h3>
        </div>
        <div className="three_createPostBtn three_sideSub">
                <button id="three_createPost" onClick={this.renderForm}>Create Post</button>
        </div>
    </div> : <button onClick={this.showSidebar}>Show Panel</button>}

            </div>
        )
    }
}

export default Home;