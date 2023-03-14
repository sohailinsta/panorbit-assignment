import React from 'react';
import LoginPopUp from "./LoginPopUp";
import "./Header.css";

function Header() {
  return (
    <div>
        <div className="topContainer">
          <h6 className="topContainerTitle">Profile</h6>
          <LoginPopUp />
        </div>
        <hr className="topContainerHorizontalLine"></hr>
        </div>
  )
}

export default Header