import React, { Component } from "react";
import "./NavBar.css";
import Grid from "@material-ui/core/Grid";
import foodie_logo from "../../images/FoodieLogo.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/love.svg";
import Avatar from "@material-ui/core/Avatar";
import pp from "../../images/pp1.png";
import UserProfile from "../UserProfile/UserProfile";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="navbar__barContent">
          <Grid container>
            <Grid item xs={2}>
              {" "}
            </Grid>
            <Grid item xs={3}>
              <img className="navbar_logo" src={foodie_logo} width="105px" />
            </Grid>
            <Grid item xs={3}>
              <input
                text="text"
                className="navbar__searchBar"
                placeholder="Search"
              />
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <Link to="/home">
                <img className="navbar__img" src={home} width="25px" />
              </Link>
              <img className="navbar__img" src={message} width="25px" />
              <img className="navbar__img" src={find} width="25px" />
              <img className="navbar__img" src={react} width="25px" />
              <Link to="/profile">
                <Avatar
                  src={pp}
                  className="navbar__img"
                  style={{ maxWidth: "25px", maxHeight: "25px" }}
                  to={"/profile"}
                />
              </Link>
              <div className="logoutBTN">
                <Link to="/">
                  <Button>Log Out</Button>
                </Link>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default NavBar;
