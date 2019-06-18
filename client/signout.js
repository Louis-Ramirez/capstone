import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { signupAction } from './actions'; 

class Signout extends Component {
    componentDidMount() {
        this.props.signoutAction(); 
}

    render() {
        return <h7>Logging you out</h7>; 
    }
}

export default connect(null,actions)(Signout); 