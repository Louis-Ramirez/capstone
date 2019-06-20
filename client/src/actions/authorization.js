//action creator

import axios from 'axios';

//these actions will be dispatched to the provider
export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';


const URL = 'http://127.0.0.1:8080';

//passing password and history from login component
//email/pass required for auth & history object will
//help us direct the user if login is successful
export function loginAction({ email, password}, history){
    return async(dispatch) => {
        try {
            //post -> sending email & pass to the server
            const res = await axios.post(`${URL}/api/users/signin`, {email, password});

            dispatch({ type: AUTHENTICATED});
            //AUTHENTICATED saves token in localStorage
            localStorage.setItem('user', res.data.token);
            //history.push() redirects the user to the specific route URL
            history.push('/home',{user: res.data.user});

        } catch (error){
            dispatch({
                type: AUTHENTICATION_ERROR, //action
                payload: 'invalid email or password'//data
            });
        }

    };
}

export function signUpAction({username, email, password}, history){
    return async(dispatch) =>{
        try{
            const res = await axios.post(`${URL}/api/users/signup`, { username, email, password});

            dispatch({
                type: SIGNUP,
                payload: res.data.message
            });
            history.push('/login');
        }
        catch(error){
            console.log(error);
            dispatch({
                type: SIGNUP_ERROR,
                payload: error.message
            });
        }
    };
}

export function signoutAction(history) {
    return async (dispatch) => {
  try{
    localStorage.clear();
    dispatch({
        type: UNAUTHENTICATED
    });
    history.push('/');
  } catch(error){
    dispatch({
        type: AUTHENTICATION_ERROR, //action
        payload: 'log out failed'//data
    });
  }
}

}
