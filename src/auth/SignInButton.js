import React, { Component } from 'react';

export default class SignInButton extends Component {
  render() {
    const { onSignInClick } = this.props;
    const signInbtn ={
        margin:'20px',
    }
    return <button onClick={ onSignInClick } style={signInbtn}>Signin Here</button>;
  }
}
