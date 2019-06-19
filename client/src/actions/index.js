//action creator 

import axios from 'axios'; 

//these actions will be dispatched to the provider 
export const AUTHENTICATED = 'authenticated_user'; 
export const UNAUTHENTICATED = 'unauthenticated_user'; 
export const AUTHENTICATION_ERROR = 'authentication_error'; 

const URL = 'http://www.sample-website.com'; 

//passing password and history from login component 
//email/pass required for auth & history object will
//help us direct the user if login is successful 
export function loginAction({email, password}, history){
    return async(dispatch) => {
        try {
            //post -> sending email & pass to the server 
            const res = await axios.post(`${URL}/login`, {email, password}); 

            dispatch({ type: AUTHENTICATED}); 
            //AUTHENTICATED saves token in localStorage 
            localStorage.setItem('user', res.data.token); 
            //history.push() redirects the user to the specific route URL
            history.push('/post'); 
        } catch (error){
            dispatch({
                type: AUTHENTICATION_ERROR, //action
                payload: 'invalid email or password'//data 
            }); 
        }

    }; 
}

export function signoutAction() {
    localStorage.clear(); 
    return {
        type: UNAUTHENTICATED
    }; 
}