import { Button } from "@material-ui/core";
import "./Sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
// import { Users } from "../../dummyData";
// import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link to="/home">
              <Button>
                <RssFeed className="sidebarIcon" />
                <span className="sidebarListItemText">Feed</span>
              </Button>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Button>
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </Button>
          </li>
          <li className="sidebarListItem">
            <Button>
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </Button>
          </li>
          <li className="sidebarListItem">
            <Button>
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </Button>
          </li>
          <li className="sidebarListItem">
            <Button>
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </Button>
          </li>
          <li className="sidebarListItem">
            <Button>
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </Button>
          </li>
          <li className="sidebarListItem">
            <Button>
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </Button>
          </li>
          <li className="sidebarListItem">
            <Button>
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </Button>
          </li>
          <li className="sidebarListItem">
            <Button>
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </Button>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        {/* <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}
