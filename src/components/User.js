import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./User.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import LoginPopUp from "./LoginPopUp";

function User() {
  // console.log(props.location.state);
  const location = useLocation();
  const { profilePic } = location.state;
  console.log(profilePic);
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
    <div className="userDetailsContainer">
      {/* <div className="sidebar my-4 mx-3">
        <div className="sidebarItemsChecked ps-4">
          <h6>user</h6>
          <hr className="sidebarItemsHorizontalLine"></hr>
        </div>
        <div className="sidebarItems ps-4">
        <Link className="sidebarItemPost" to="/post">
          <h6>Post</h6>
          </Link>
          <hr className="sidebarItemsHorizontalLine"></hr>
        </div>
        <div className="sidebarItems ps-4">
          <h6>Gallery</h6>
          <hr className="sidebarItemsHorizontalLine"></hr>
        </div>
        <div className="sidebarItems ps-4">
          <h6>ToDo</h6>
          <hr className="sidebarItemsHorizontalLine"></hr>
        </div>
      </div> */}
      <Sidebar />
      <div className="mainContent">
        {/* <div className="topContainer">
          <h6 className="topContainerTitle">Profile</h6>
          <LoginPopUp />
        </div> */}
        <Header />
        {/* <hr className="topContainerHorizontalLine"></hr> */}
        <div className="bottomContainer">
          <div className="bottomContainerLeft">
            <div className="bottomContainerLeftItems">
              <div className="bottomContainerLeftAvatar">
                <Avatar
                  src={profilePic}
                  alt="Remy Sharp"
                  sx={{ width: 150, height: 140 }}
                />
              </div>
              <h6 className="bottomContainerLeftUser">{user.name}</h6>
              <div className="bottomContainerLeftUserDetails">
                <h6 className="bottomContainerLeftItemLeft">
                  <h6 className="bottomContainerLeftUserDetailLeft">
                    username :
                  </h6>
                  <h6 className="bottomContainerLeftUserDetailRight">
                    {user.username}
                  </h6>
                </h6>
                <h6 className="bottomContainerLeftItemLeft">
                  <h6 className="bottomContainerLeftUserDetailLeft">email :</h6>
                  <h6 className="bottomContainerLeftUserDetailRight">
                    {user.email}
                  </h6>
                </h6>
                <h6 className="bottomContainerLeftItemLeft">
                  <h6 className="bottomContainerLeftUserDetailLeft">phone :</h6>
                  <h6 className="bottomContainerLeftUserDetailRight">
                    {user.phone}
                  </h6>
                </h6>
                <h6 className="bottomContainerLeftItemLeft">
                  <h6 className="bottomContainerLeftUserDetailLeft">
                    website :
                  </h6>
                  <h6 className="bottomContainerLeftUserDetailRight">
                    {user.website}
                  </h6>
                </h6>
              </div>
              <hr className="bottomContainerUserDetailHorizontalLine"></hr>
            </div>
            <div className="bottomContainerLeftItems">
              <h6 className="bottomContainerLeftUser">Company</h6>
              <div className="bottomContainerLeftUserDetails">
                <h6 className="bottomContainerLeftItemLeft">
                  <h6 className="bottomContainerLeftUserDetailLeft">Name :</h6>
                  <h6 className="bottomContainerLeftUserDetailRight">
                    {user.company?.name}
                  </h6>
                </h6>
                <h6 className="bottomContainerLeftItemLeft">
                  <h6 className="bottomContainerLeftUserDetailLeft">
                    catchPhrase :
                  </h6>
                  <h6 className="bottomContainerLeftUserDetailRight">
                    {user.company?.catchPhrase}
                  </h6>
                </h6>
                <h6 className="bottomContainerLeftItemLeft">
                  <h6 className="bottomContainerLeftUserDetailLeft">bs :</h6>
                  <h6 className="bottomContainerLeftUserDetailRight">
                    {user.company?.bs}
                  </h6>
                </h6>
              </div>
              <hr className="bottomContainerUserDetailHorizontalLine"></hr>
            </div>
          </div>
          <div className="bottomContainerRight">
            <div className="bottomContainerRightItems">
              <h6 className="bottomContainerRightTitle">Address:</h6>
              <div className="bottomContainerLeftUserDetails">
                <h6 className="bottomContainerLeftItemLeft">
                  <h6 className="bottomContainerLeftUserDetailLeft">
                    Street :
                  </h6>
                  <h6 className="bottomContainerLeftUserDetailRight">
                    {user.address?.street}
                  </h6>
                </h6>
                <h6 className="bottomContainerLeftItemLeft">
                  <h6 className="bottomContainerLeftUserDetailLeft">suite :</h6>
                  <h6 className="bottomContainerLeftUserDetailRight">
                    {user.address?.suite}
                  </h6>
                </h6>
                <h6 className="bottomContainerLeftItemLeft">
                  <h6 className="bottomContainerLeftUserDetailLeft">City :</h6>
                  <h6 className="bottomContainerLeftUserDetailRight">
                    {user.address?.city}
                  </h6>
                </h6>
                <h6 className="bottomContainerLeftItemLeft">
                  <h6 className="bottomContainerLeftUserDetailLeft">
                    Zipcode :
                  </h6>
                  <h6 className="bottomContainerLeftUserDetailRight">
                    {user.address?.zipcode}
                  </h6>
                </h6>
              </div>
            </div>
            <iframe
              className="bottomContainerLeftMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7111136428716!2d77.59306481430396!3d12.926279719369797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15090fc15417%3A0x10eefde49e9fd94!2sPanorbit!5e0!3m2!1sen!2sin!4v1678471873604!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="d-flex justify-content-end mt-1 bottomContainerLeftMapLatLong">
              <div className="d-flex">
                <h6 className="bottomContainerLeftMapLat">Lat:</h6>
                <h6 className="ps-1">{user.address?.geo.lat}</h6>
              </div>
              <div className="d-flex">
                <h6 className="ms-2 bottomContainerLeftMapLong">Long:</h6>
                <h6 className="ps-1">{user.address?.geo.lng}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
