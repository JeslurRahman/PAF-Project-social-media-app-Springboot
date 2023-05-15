import React, { Component } from "react";
import "../LoginPage/LoginPage.css";
import { storage, auth } from "../firebase";
import { Link } from "react-router-dom";

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      password: null,
    };
  }

  login = () => {
    auth
      .signInWithEmailAndPassword(this.state.emailId, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        localStorage.setItem("users", JSON.stringify(user));
        window.location.href = "/home";
        alert("Successfully logged");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error occurred while sign in.");
      });
  };

  render() {
    return (
      <div>
        <input
          className="logipage__text"
          onChange={(event) => {
            this.state.emailId = event.currentTarget.value;
          }}
          type="text"
          placeholder="Phone number, username, or email"
        />
        <input
          className="logipage__text"
          onChange={(event) => {
            this.state.password = event.currentTarget.value;
          }}
          type="password"
          placeholder="Password"
        />
        {alert === "Successfully logged" ? (
          <Link to="/home">
            <button className="login__button" onClick={this.login}>
              Log In
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button className="login__button" onClick={this.login}>
              Log In
            </button>
          </Link>
        )}
      </div>
    );
  }
}

export default SignIN;
