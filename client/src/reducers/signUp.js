import {SIGNUP, SIGNUP_ERROR} from '../actions'

export default function( state= {}, action){
    switch(action.type){
        case SIGNUP:
            return {...state, message: action.payload};
        case SIGNUP_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}