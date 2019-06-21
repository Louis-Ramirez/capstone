import { FETCH_ALL_POSTS, FETCH_ALL_POST_COMMENTS, ADD_NEW_POST, FETCH_POST_BY_ID } from '../actions/actionPost';


//if the user is authenticated, state returns true or false
//if error then state also returns a message
//these reducers handle diff cases based on dipatched action types

export default function(state = [], action){
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return action.payload;
    case ADD_NEW_POST:
      return [...state, action.payload];
    case FETCH_ALL_POST_COMMENTS:
      return action.payload;
    case FETCH_POST_BY_ID:
      return action.payload
    default:
      return state;
  }
}
