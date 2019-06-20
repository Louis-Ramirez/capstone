//signUp.js
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {signUpAction} from '../actions/authorization';  

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
                <img src = "https://useiconic.com/open-iconic/svg/puzzle-piece.svg" class="iconic iconic-lg" alt="puzzle piece" width="50"/>
                <h3 className="title">SIGN UP</h3>

            <form onSubmit={handleSubmit(this.submit)}>
                <Field name="username"
                        component="input"
                        type="text"
                        placeholder="Username"
                    /><br/>
                <Field name="email"
                    component="input"
                    type="text"
                    placeholder="Email"
                /><br/>
                <Field name="password"
                    component="input"
                    type="password"
                    placeholder="Password"
                /><br/>
                <div className="btnWrapper">
                    <button type="submit" className="Login-Btn">SIGN UP</button>
                </div>
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
