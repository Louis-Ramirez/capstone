//signUp.js
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {signUpAction} from '../actions';  

class SignUp extends React.Component {

    submit = (values) => {
       this.props.signUpAction(values, this.props.history);

    }

    Message(){
        if (this.props.Message){
            return (
                <div className ="info-red">
                    {this.props.message}
                </div>
            );
        }
    }

    render(){
        const { handleSubmit } = this.props;

        return(
         <div className="form-container">
            <div className="container">
              <h3 className="title">Sign Up</h3>

            <form onSubmit={handleSubmit(this.submit)}>
                <Field name="username"
                        component="input"
                        type="text"
                        placeholder="Username"
                    />
                    <Field name="email"
                        component="input"
                        type="text"
                        placeholder="Email"
                    />
                    <Field name="password"
                        component="input"
                        type="password"
                        placeholder="Password"
                    />
                <button type="submit" className="Login-Btn">Sign Up</button>
            </form>
            {this.Message()}
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    return { Message: state.signUp.message};
}


const reduxFormSignUp = reduxForm({
    form:'SignUp'
}) (SignUp);

export default connect(mapStateToProps, {signUpAction})(reduxFormSignUp);
