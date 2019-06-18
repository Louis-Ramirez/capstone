//createPostForm.js
import React from 'react';

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            body:''
        };
    //bind
this.onInputChange = this.onInputChange.bind(this);    
}

onInputChange(e){
    this.setState({
        [e.target.name]: e.target.value
    });
}
render() {
    return(
        <div className="container">
            <form >
            <div className = "form-group">      
                <input 
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
                type ="text" 
                name="body"  
                placeholder="Body" 
                onChange={this.onInputChange} 
                ref="body"
                className="form-control"
                />
            </div>
            <button className="btn-btb-primary">Post</button>
            </form>
        </div>
     );
    }
}

export default Input;