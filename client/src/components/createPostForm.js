//createPostForm.js
import React from 'react';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            body:''
        };
}

onInputChange(e){
    this.setState({
        [e.target.value] = e.target.value
    })
}
render() {
    return(
        <div className="container">
            <form>
                <input type ="text" name="title" placeholder="Title" onChange = {this.onInputChange} ref="title" />
                <input type ="text" name="body"  placeholder="Body" onChange={this.onInputChange} ref="body" />
                <button>Post</button>
            </form>
        </div>
     );
    }
}
// const input =(props)=>(
    
//     return(
//     <div>
//         <label>props.label</label>     
//         <input></input>
//     </div>
//     );
// );

export default input;