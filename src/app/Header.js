import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../auth/authActions';
import SignInButton from '../auth/SignInButton';

export class Header extends Component {
  render() {
    const { onSignInClick, auth } = this.props;
    return (
      <div>
        { auth.isUserSignedIn ?
            <h1 className="text-center">Welcome {auth.displayName }</h1> :
            <SignInButton onSignInClick={ onSignInClick } auth={ auth }/>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSignInClick: () => {
      dispatch(authActions.signIn())
    }
  }
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
