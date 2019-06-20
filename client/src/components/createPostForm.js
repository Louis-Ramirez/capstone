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
         posts:{}
     };
//bind
this.onInputChange = this.onInputChange.bind(this);    
this.onHandleSubmit = this.onHandleSubmit.bind(this);
}
//life cycle
componentDidMount(){
    database.on('value', snapshot => {
        this.setState({
            posts: snapshot.val()
        });
    });
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
            <ReactQuill
              modules={CreatePost.modules}
              formats={CreatePost.formats}
              value={this.state.body}
              placeholder="Body"
              onChange={this.onHandleChange}
            />
          </div>
          <button className="btn btn-primary">Post</button>
        </form>
      </div>
    );   
  }
}

// CreatePost.modules = {
//     toolbar: [
//       // [{ header: '1' }, { header: '2' }, { font: [] }],
//       // [{ size: [] }],
//       // ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       // [{ list: 'ordered' }, { list: 'bullet' }],
//       // ['link', 'image', 'video'],
//       // ['clean'],
//       // ['code-block']
//     ]
//   };
  
//   CreatePost.formats = [
//     // 'header',
//     // 'font',
//     // 'size',
//     // 'bold',
//     // 'italic',
//     // 'underline',
//     // 'strike',
//     // 'blockquote',
//     // 'list',
//     // 'bullet',
//     // 'link',
//     // 'image',
//     // 'video',
//     // 'code-block'
//   ];
//ferchplayer are things that you can call in this component everything after dispatch is being called in the utitiltites folder
  function mapDispatchtoProps(dispatch) {
    return {
      fetchPlayer: (lastName, firstName) => dispatch(fetchPlayerThunk(lastName, firstName)),
      removePlayer: () => dispatch(removePlayerThunk())
    }
  }

  function mapDispatch(dispatch) {
    return {
      fetchPlayer: (lastName, firstName) => dispatch(fetchPlayerThunk(lastName, firstName)),
      removePlayer: () => dispatch(removePlayerThunk())
    }
  }
  

  export default CreatePost;
