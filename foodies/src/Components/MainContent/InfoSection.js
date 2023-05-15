import React, { Component } from "react";
import "./InfoSection.css";
import { Avatar } from "@material-ui/core";
import imageSrc from "../../images/pp1.png";
import Profile from "../../images/Profile.jpg";

class InfoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="info__container">
          <Avatar src={Profile} className="info__image" />
          <div className="info_content">
            <div className="info_username"> Elon Musk</div>
            <div className="info_description"> Founder of Tesla & spaceX</div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoSection;
