import React, { Component } from "react";
import "./StatusBar.css";
import { Avatar } from "@material-ui/core";
import statusimg from "../../images/pp1.png";

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: [],
    };
  }

  render() {
    return (
      <div>
        <div className="statusbar__container">
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg} />
            <div className="statusbar__text">Elon Musk</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg} />
            <div className="statusbar__text">Andre Tate</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg} />
            <div className="statusbar__text">John Buffet</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg} />
            <div className="statusbar__text">Mark Zukerbage</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg} />
            <div className="statusbar__text">Deo duff</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg} />
            <div className="statusbar__text">Rolex</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg} />
            <div className="statusbar__text">xxx shake</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg} />
            <div className="statusbar__text">Jeslur</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg} />
            <div className="statusbar__text">Harsha</div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusBar;
