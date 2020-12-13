//import React, { Component } from 'react';
import React from 'react';
import { useHistory } from "react-router-dom";

const Logout = (props) => {
    const history = useHistory();

    return (
    <>
    {props.logout()}
    {console.log("When did this run?")}
    {history.push("/login")}
    </>
    )
}

//class Login extends Component {
//
//  render() {
//    const history = useHistory();
//      return (
//          <>
//          {this.props.logout()}
//          {history.push("/login")}
//          </>
//      )
//  };
//};
//
export default Logout