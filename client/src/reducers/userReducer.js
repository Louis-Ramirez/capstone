// User reducer

import {USER} from '../actions/index'

export default function( state = {}, action){
    switch(action.type){
        case USER:{
            console.log("Reducer", action.payload);
            return action.payload
        }
        default: 
            return state;
    }
}