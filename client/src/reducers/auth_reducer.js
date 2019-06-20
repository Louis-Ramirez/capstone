import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../actions'; 

//if the user is authenticated, state returns true or false
//if error then state also returns a message
//these reducers handle diff cases based on dipatched action types

export default function(state={}, action){
    switch(action.type) {
        case AUTHENTICATED:
            //"..." simply takes the entire state and sets it true
            return { ...state, authenticated: true };
        case UNAUTHENTICATED:
            return { ...state, authenticated: false};
        case AUTHENTICATION_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }

    return state;
}
