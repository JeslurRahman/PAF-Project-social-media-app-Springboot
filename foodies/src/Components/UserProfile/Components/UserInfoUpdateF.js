import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { Typography } from "@material-ui/core";
import "./UpdateForm.css";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserInfoUpdateF = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8183/profile/126", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .put("http://localhost:8183/profile/126", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("User data updated successfully");
        navigate.push("/profile");
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div className="update-form-title">
          <Typography variant="h5">Update User Information</Typography>
        </div>
        <div className="update-form-content">
          <div className="update-form-Item-list">
            <div className="update-form-item">
              <Typography>First Name</Typography>
              <TextField
                name="firstname"
                variant="outlined"
                value={userData.firstname}
                onChange={handleInputChange}
              />
            </div>
            <div className="update-form-item">
              <Typography>Last Name</Typography>
              <TextField
                name="lastname"
                variant="outlined"
                value={userData.lastname}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="update-form-Item-list">
            <div className="update-form-item">
              <Typography>NIC Number</Typography>
              <TextField
                name="nicnumber"
                variant="outlined"
                value={userData.nicnumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="update-form-item">
              <Typography>Email</Typography>
              <TextField
                name="email"
                variant="outlined"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="update-form-Item-list">
            <div className="update-form-item">
              <Typography>Phone</Typography>
              <TextField
                name="phonenumber"
                variant="outlined"
                value={userData.phonenumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="update-form-item">
              <Typography>About Me</Typography>
              <TextField
                name="aboutme"
                variant="outlined"
                value={userData.aboutme}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="update-form-Item-list">
            <div className="update-form-item">
              <Typography>Background</Typography>
              <TextField
                name="background"
                variant="outlined"
                value={userData.background}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="update-form-button">
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Update
            </Button>
          </div>
          <div>
            <Link to="/profile">
              <Button variant="outlined">Back</Button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserInfoUpdateF;
