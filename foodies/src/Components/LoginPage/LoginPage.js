import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@material-ui/core/Grid";
import foodie_logo from "../../images/FoodieLogo.png";
import fb from "../../images/fb.png";
import FoodBanner from "../../images/FoodBanner1.jpg";
import SignIN from "./SignIN";
import SignUp from "./SignUp";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  changeLogin = () => {
    if (this.state.isLogin) this.setState({ isLogin: false });
    else this.setState({ isLogin: true });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage__main">
              <div>
                <img
                  className="loginpage__Banner"
                  src={FoodBanner}
                  width="354px"
                />
              </div>
              <div>
                <div className="loginpage_rightcomponent">
                  <img className="loginpage__logo" src={foodie_logo} />

                  <div className="loginPage__signin">
                    {this.state.isLogin ? <SignIN /> : <SignUp />}

                    <div className="login__ordiv">
                      <div className="login__dividor"></div>
                      <div className="login__or">OR</div>
                      <div className="login__dividor"></div>
                    </div>

                    <div className="login__fb">
                      <img
                        src={fb}
                        width="15px"
                        style={{ marginRight: "5px" }}
                      />
                      Log in with Facebook
                    </div>
                    <div className="login_forgt"> Forgot password?</div>
                  </div>
                </div>

                <div className="loginpage__signupoption">
                  {this.state.isLogin ? (
                    <div className="loginPage__signin">
                      Don't have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#FC6600" }}
                      >
                        Sign up
                      </span>
                    </div>
                  ) : (
                    <div className="loginPage__signup">
                      Have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#FC6600" }}
                      >
                        Sign in
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
