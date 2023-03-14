import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import "./Post.css";
function Post() {
  return (
    <div className="postContainer">
      <Sidebar />
      <div className="mainContent">
      <Header />
      {/* <hr className="topContainerHorizontalLine"></hr> */}
      <div className="mainContentTitle">Coming Soon</div>
      </div>
    </div>
  )
}

export default Post