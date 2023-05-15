import React, { Component } from "react";
import { storage, auth } from "../firebase";
import { Snackbar } from "@material-ui/core";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      name: null,
      userName: null,
      password: null,
      showSuccessAlert: false,
      showErrorAlert: false,
      errorMessage: "",
    };
  }

  newSignUp = () => {
    auth
      .createUserWithEmailAndPassword(this.state.emailId, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        let payload = {
          userId: user.uid,
          userName: this.state.userName,
          name: this.state.name,
          profileImage: "",
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8183/users", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("users", JSON.stringify(user));
            window.location.reload();
            this.setState({
              showSuccessAlert: true,
            });
          })
          .catch((error) => {
            this.setState({
              showErrorAlert: true,
              errorMessage: "Error occurred while signing up.",
            });
          });

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        this.setState({
          showErrorAlert: true,
          errorMessage: "Error occurred while signing up.",
        });
        // ..
      });
  };

  handleSuccessAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      showSuccessAlert: false,
    });
  };

  handleErrorAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      showErrorAlert: false,
    });
  };

  render() {
    return (
      <div>
        <input
          className="logipage__text"
          onChange={(event) => {
            this.setState({
              emailId: event.currentTarget.value,
            });
          }}
          type="text"
          placeholder="Mobile number or Email"
        />
        <input
          className="logipage__text"
          onChange={(event) => {
            this.setState({
              name: event.currentTarget.value,
            });
          }}
          type="text"
          placeholder="Full Name"
        />
        <input
          className="logipage__text"
          onChange={(event) => {
            this.setState({
              userName: event.currentTarget.value,
            });
          }}
          type="text"
          placeholder="Username"
        />
        <input
          className="logipage__text"
          onChange={(event) => {
            this.setState({
              password: event.currentTarget.value,
            });
          }}
          type="password"
          placeholder="Password"
        />
        <button className="login__button" onClick={this.newSignUp}>
          Sign up
        </button>
        <Snackbar
          open={this.state.showSuccessAlert}
          autoHideDuration={6000}
          onClose={this.handleSuccessAlertClose}
          message="Successfully signed up!"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
        <Snackbar
          open={this.state.showErrorAlert}
          autoHideDuration={6000}
          onClose={this.handleErrorAlertClose}
          message="Error occurred while signing up."
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
      </div>
    );
  }
}

export default SignUp;
