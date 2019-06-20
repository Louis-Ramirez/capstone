import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutAction } from '../actions'; 


class SignOut extends Component {
    componentDidMount() {
        this.props.signoutAction(this.props.history);
}

    render() {
        return <h7>Logging you out</h7>;
    }
}

function mapStateToProps(state){
    return{authenicated: state.auth.authenticated};
}

export default connect(mapStateToProps, {signoutAction})(SignOut);

// const connectedSignoutPage = connect(mapStateToProps)(Signout);
// export { connectedSignoutPage as Signout };
