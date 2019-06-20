//actionCreatePost
import axios from 'axios';

// ACTION TYPES;
const FETCH_POST = "FETCH_POST";
const REMOVE_POST = "REMOVE_POST";


// ACTION CREATORS;
const fetchPost = (post) => {
    return {
      type: FETCH_POST,
      payload: post
    }
  }
  
  const removePost = () => {
    return {
      type: REMOVE_POST
    }
  }



// THUNK CREATORS;
export const fetchPostThunk = (Title, Body) => (dispatch) => {
  return axios
    // .get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
    // .then(res => res.data)
    // .then(nbaPlayer => dispatch(fetchPlayer(nbaPlayer)))
    // .catch(err => console.log(err));
}

export const removePostThunk = () => (dispatch) => {
  return dispatch(removePost());
}


// REDUCER;
export default (state = {}, action) => {
    switch (action.type) {
      case FETCH_POST:
        return action.payload;
      case REMOVE_POST:
        return {};
      default:
        return state;
    }
  }
  