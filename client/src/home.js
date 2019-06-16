//home.js

import React from 'react';
import './home.css'


class Home extends React.Component{
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
                    <div className="three_list">
                        <h3>Recent: </h3>
                        {postList}
                    </div>
                </div>
                <div className="three_sidebar">
                    <div className="three_credentials three_sideSub">
                        <img src="https://data.whicdn.com/images/320568210/large.jpg" alt="Cartoon Girl"/>
                        <h3> Cartoon Girl</h3>
                    </div>
                    <div className="three_createPostBtn three_sideSub">
                            <button id="three_createPost">Create Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;