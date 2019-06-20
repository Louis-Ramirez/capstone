//login.js

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginAction } from '../actions/authorization'; 

class login extends Component {
    submit = (values) => {
        this.props.loginAction(values, this.props.history);
    }

    errorMessage(){
        if (this.props.errorMessage){
            return (
                <div className ="info-red">
                    {this.props.errorMessage}
                </div>
            );
        }
    }
    render(){
        //data passed to the view
        const { handleSubmit } = this.props;

        return (
            <div className="form-container">
                <div className="container">
                    <img src = "https://useiconic.com/open-iconic/svg/puzzle-piece.svg" class="iconic iconic-lg" alt="puzzle piece" width="50"/>
                    <h3 className="title">Log In</h3>


                    <form onSubmit={ handleSubmit(this.submit)}>
                    <Field name="email"
                        component="input"
                        type="text"
                        placeholder="Username"
                    /><br/>
                    <Field name="password"
                        component="input"
                        type="text"
                        placeholder="Password"
                    /><br/>
                    <div className="btnWrapper">
                        <button type="submit" className="Login-Btn">LOG IN</button>
                    </div>

                    </form>
                    {this.errorMessage()}
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

//to make the sign in form communicate with the store, needs to wrapped around reduxForm
//
const reduxFormLogin = reduxForm({
    form:'login'
}) (login); //the class

//reducer as formReducer from 'redux-form'
//which we can import into the rootReducer

export default connect(mapStateToProps, {loginAction})(reduxFormLogin);
//to use the state as props (we need i.e state.auth.error)
