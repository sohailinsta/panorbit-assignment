import React from "react";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "./LoginPopUp.css";

function LoginPopUp() {
  const location = useLocation()
  const  { profilePic } = location.state;
  console.log(profilePic);
  function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
  }
  const { id } = useParams();
  const [user, setUser] = useState({});
  const fetchData = async () => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // let result = data;
        console.log(data);
        setUser(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="d-flex align-items-center">
        <Avatar
          onClick={togglePopup}
          className="me-3 topContainerAvatar"
          src={profilePic}
          alt="Remy Sharp"
        />
        <h6
          className="topContainerUserName"
          onClick={togglePopup}
          class="first-button"
        >
          {user.name}
        </h6>
      </div>
      <div className="popup" id="popup-1">
        <div className="content">
          <div className="my-5">
            <div className="popupAvatar mb-4">
              <Avatar
                className="me-3"
                src={profilePic}
                sx={{ width: 75, height: 80 }}
                alt="Remy Sharp"
              />
            </div>
            <h6>{user.name}</h6>
            <h6 className="text-muted">{user.email}</h6>
            <Link to="/">
            <button class="second-button bg-danger">Sign Out</button>
            </Link>
            {/* <p>
              Don’t have an account? <a href="www.google.com">Sign Up</a>
            </p> */}
            <div class="close-btn" onClick={togglePopup}>
              ×
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPopUp;
