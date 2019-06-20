//createPostForm.js
import {Redirect} from 'react-router-dom';
import _ from 'lodash';
//import database
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import { connect } from 'react-redux';
import {fetchPostThunk, removePostThunk} from '../thunks';

class CreatePost extends Component {
    constructor(props){
     super(props); 
     this.state = {
         title:'',
         body:'',
     };
//bind
this.onInputChange = this.onInputChange.bind(this);    
this.onHandleSubmit = this.onHandleSubmit.bind(this);
}

onHandleChange(e){
    this.setState({ body: e });
    console.log(this.state.body);
}

onHandleSubmit(e){
    e.preventDefault();
    const post ={
        title: this.state.title,
        body: this.state.body
    };
    //database.push(post);  call my action 
    this.setState({
        title:'',       // return state to default 
        body:''
    });
}
render() {
    return(
        <div className="container">
        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <input
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Title"
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
              ref="title"
              className="form-control"
            />
          </div>
          <div className="form-group">      
              value={this.state.body}
              placeholder="Body"
              onChange={this.onHandleChange}

          </div>
          <button className="btn btn-primary">Post</button>
        </form>
      </div>
    );   
  }
}

// Map state to props;
function mapState(state) {
  return {
    currentPost: state.currentPost
  }
}


  function mapDispatch(dispatch) {
    return {
      fetchPost: (Title, Body) => dispatch(fetchPostThunk(Title, Body)),
      removePost: () => dispatch(removePostThunk())
    }
  }
  

  export default(mapState, mapDispatch)(CreatePost);
