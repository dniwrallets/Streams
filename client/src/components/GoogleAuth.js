import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "842961946707-j3al5ivol071p0bsvt0ran5nfo1u40oh.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignOutClicked = () => {
    this.auth.signOut();
  };

  onSignInClicked = () => {
    this.auth.signIn();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === true) {
      return (
        <button
          onClick={this.onSignOutClicked}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else if (this.props.isSignedIn === false) {
      return (
        <button onClick={this.onSignInClicked} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
    return null;
  };

  render = () => {
    return <div>{this.renderAuthButton()}</div>;
  };
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
