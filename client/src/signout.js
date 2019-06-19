import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { signoutAction } from './actions'; 


class Signout extends Component {
    componentDidMount() {
        this.props.signoutAction(); 
}

    render() {
        return <h7>Logging you out</h7>; 
    }
}

export default connect(null, signoutAction); 

// const connectedSignoutPage = connect(mapStateToProps)(Signout);
// export { connectedSignoutPage as Signout }; 