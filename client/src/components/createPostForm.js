//createPostForm.js
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class CreatePost extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            body:''
            
        };
    //bind
this.onInputChange = this.onInputChange.bind(this);    
this.onHandleSubmit = this.onHandleSubmit.bind(this);
}


// renderPosts(){
// STUB    
// }

onInputChange(e){
    this.setState({
        [e.target.name]: e.target.value
    });
}

onHandleSubmit(e){
    e.preventDefault();
    const post ={
        title: this.state.title,
        body: this.state.body
    };
    database.push(post);  
    this.setState({
        title:'',       // return state to default 
        body:''
    });
}
render() {
    return(
        <div className="container">
            <form onSubmit ={this.onHandleSubmit}>
            <div className = "form-group">      
                <input 
                value={this.state.title}
                type ="text" 
                name="title" 
                placeholder="Title" 
                onChange = {this.onInputChange} 
                ref="title"
                className ="form-group" 
                />
            </div>   
            <div className = "form-control">
                <input 
                value={this.state.body}
                type ="text" 
                name="body"  
                placeholder="Body" 
                onChange={this.onInputChange} 
                ref="body"
                className="form-control"
                />
            </div>
            <button className="btn-btn-primary">Post</button>
            </form>
        </div>
     );
    }
}

export default CreatePost;