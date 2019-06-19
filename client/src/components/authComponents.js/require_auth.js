import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class Authentication extends Component {

    //before mounting, pushing the history to login 
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/login');
      }
    }

    //before rendering, pushing history to login 
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/login');
      }
    }

    //typcasting as an object 
    PropTypes = {
      router: PropTypes.object,
    }

    //rendering the component 
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  //passing the updated state 
  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}