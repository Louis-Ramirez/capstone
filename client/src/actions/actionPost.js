import axios from 'axios';

export const FETCH_ALL_POSTS = "FETCH_ALL_POSTS";
export const FETCH_ALL_POST_COMMENTS = "FETCH_ALL_POST_COMMENTS";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const FETCH_POST_BY_ID = "FETCH_POST_BY_ID";

// action creator -- generated by axios.action returns a response and pass it into action creator as parameter
const fetchAllPosts = (posts) => {
  console.log("-------fetching all posts ---------");
  return {
    type: FETCH_ALL_POSTS,
    payload: posts
  }
}

const addNewPost = (post) => {
  return {
    type: ADD_NEW_POST,
    payload: post
  }
}

const fetchAllPostsComments = (comments) => {
  console.log("fetchAllPostsComments=",comments);
  return {
    type: FETCH_ALL_POST_COMMENTS,
    payload: comments
  }
}

const fetchPostById = (post) => {
  console.log("--------- starting fetchPostById-------------");
  return{
    type: FETCH_POST_BY_ID,
    payload: post
  }
}


// thunk creator
export const fetchAllPostsThunk = () => (dispatch) => {
  console.log("are we here? ");
  return axios
    .get("http://127.0.0.1:8080/api/posts")
    .then(response => dispatch(fetchAllPosts(response.data)))
    .catch(err => console.log(err));
}

export const addNewPostThunk = (post, userId) => (dipatch) => {
  // http://127.0.0.1:8080/api/users/1/posts?title=testing title&body=dink y hink y alalalalla
  return axios
    .post(`http://127.0.0.1:8080/api/users/${userId}/posts?title=${post.title}&body=${post.body}`)
    .then(response => dipatch(addNewPost(response)))
    .catch(err => console.log(err));
}

export const fetchAllPostCommentsThunk = (postId) => (dispatch) => {
  return axios
    .get(`http://127.0.0.1:8080/api/posts/${postId}/comments`)
    .then(response => dispatch(fetchAllPostsComments(response))
    )
    .catch(err => console.log(err));
}

export const fetchPostByIdThunk = (postId) => (dispatch) => {
  console.log("---------- fetchPostBYIdThunk-------------");
  return axios
    .get(`http://127.0.0.1:8080/api/posts/${postId}`)
    .then(response => dispatch(fetchPostById(response)))
    .catch(err => console.log(err))
}

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return action.payload;
    case ADD_NEW_POST:
      return [...state, action.payload];
    case FETCH_ALL_POST_COMMENTS:
      console.log("export=",[action.payload] );
      return action.payload;
    case FETCH_POST_BY_ID:
      return action.payload
    default:
      return state;
  }
}
