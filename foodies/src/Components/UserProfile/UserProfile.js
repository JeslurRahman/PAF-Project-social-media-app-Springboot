import NavBar from "../NavBar/NavBar";
import "./UserProfile.css";
import Share from "./Share";
import Sidebar from "./Sidebar";
import Profile from "../../images/Profile.jpg";
import CoverPic from "../../images/FoodCover.jpg";
import friend1 from "../../images/friend1.jpg";
import friend2 from "../../images/friend2.jpg";
import friend3 from "../../images/pp1.png";
import friend4 from "../../images/pp2.png";
import Burger from "../../images/Burger.png";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PeopleIcon from "@mui/icons-material/People";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
export default function UserProfile() {
  const [userData, setUserData] = useState({});

  // useEffect(() => {
  // axios
  //   .get(`http://localhost:8183/profile/${id}`)
  //   .then((response) => {
  //     setUserData(response.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem("token"); // get JWT token from local storage

    axios
      .get("http://localhost:8183/profile/126", {
        headers: {
          Authorization: `Bearer ${token}`, // include JWT token in headers
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={CoverPic} alt="" />
              <img className="profileUserImg" src={Profile} alt="" />
            </div>
            <div className="profileInfo">
              <h3>Elon Musk</h3>
            </div>
            <div className="profileSetting">
              <div className="profileFollow">
                <div>
                  <h4>Followers</h4>
                  <h5>120K</h5>
                </div>
                <div>
                  <h4>Following</h4>
                  <h5>105</h5>
                </div>
              </div>
              <div className="setting-icon">
                <Link to="/setting">
                  <SettingsIcon />
                </Link>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <hr></hr>
          </div>

          <div>
            <div className="profileEdit">
              <h4 className="rightbarTitle">About</h4>
              <Link to="/updateAbout">
                <EditIcon />
              </Link>
            </div>
            <div className="userAllInfo">
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">
                    <PersonPinIcon />
                  </span>
                  <span className="rightbarInfoValue">
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoValue">
                        {userData.aboutme}
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <div className="profileEdit">
              <h4 className="rightbarTitle">Intro</h4>
              <EditIcon />
            </div>
            <div className="userAllInfo">
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">
                    <AutoStoriesIcon /> Studies at
                  </span>
                  <span className="rightbarInfoValue">Oxford University</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">
                    <PeopleIcon /> Followed by
                  </span>
                  <span className="rightbarInfoValue">32M Followers</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">
                    <FacebookIcon />
                  </span>
                  <span className="rightbarInfoValue">{userData.lastname}</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">
                    <InstagramIcon />
                  </span>
                  <span className="rightbarInfoValue">{userData.lastname}</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">
                    <LinkedInIcon />
                  </span>
                  <span className="rightbarInfoValue">{userData.lastname}</span>
                </div>
              </div>
              <div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                  <div className="rightbarFollowing">
                    <img
                      src={friend1}
                      alt=""
                      className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">John Carter</span>
                  </div>
                  <div className="rightbarFollowing">
                    <img
                      src={friend2}
                      alt=""
                      className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">Jeff Boss</span>
                  </div>
                  <div className="rightbarFollowing">
                    <img
                      src={friend3}
                      alt=""
                      className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">Andrew Tate</span>
                  </div>
                  <div className="rightbarFollowing">
                    <img
                      src={friend4}
                      alt=""
                      className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">John Voke</span>
                  </div>
                  <div className="rightbarFollowing">
                    <img
                      src={friend1}
                      alt=""
                      className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">John Carter</span>
                  </div>
                  <div className="rightbarFollowing">
                    <img
                      src={friend3}
                      alt=""
                      className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">Carter Joze</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profileEdit">
              <h4 className="rightbarTitle">User information</h4>
              <Link to="/updateUserInfo">
                <EditIcon />
              </Link>
            </div>
            <div className="userAllInfo">
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">First Name:</span>
                  <span className="rightbarInfoValue">
                    {userData.firstname}
                  </span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Last Name:</span>
                  <span className="rightbarInfoValue">{userData.lastname}</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Background:</span>
                  <span className="rightbarInfoValue">
                    {userData.background}
                  </span>
                </div>
              </div>
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Date Of Birth:</span>
                  <span className="rightbarInfoValue">1970/08/22</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">NIC Number:</span>
                  <span className="rightbarInfoValue">
                    {userData.nicnumber}
                  </span>
                </div>
              </div>
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Email:</span>
                  <span className="rightbarInfoValue">{userData.email}</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Phone:</span>
                  <span className="rightbarInfoValue">
                    {userData.phonenumber}
                  </span>
                </div>
              </div>
              <div className="rightbarInfo"></div>
            </div>
            <div className="profileEdit">
              <h4 className="rightbarTitle">Food Events</h4>
            </div>
            <div className="foodEventInfo">
              <div className="foodEventInfoCat">
                <div className="foodEventInfoItem">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={Burger}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        COMFOOD Expo
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        COMFOOD Expo are a widespread group of squamate
                        reptiles, with over 6,000 species, ranging across all
                        continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="foodEventInfoItem">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={CoverPic}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Fast Food & Cafe
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Fast Food are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </div>
            <div>
              <Share />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
