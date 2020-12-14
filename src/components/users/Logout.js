import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Logout extends Component {

  render() {
    const { history } = this.props;
    return (
          <>
          {this.props.logout()}
          {history.push("/login")}
          </>
      )
  };
};

export default withRouter(Logout)