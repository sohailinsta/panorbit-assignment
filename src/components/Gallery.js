import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import "./Gallery.css";
function Gallery() {
  return (
    <div className="galleryContainer">
      <Sidebar />
      <div className="mainContent">
      <Header />
      {/* <hr className="topContainerHorizontalLine"></hr> */}
      <div className="mainContentTitle">Coming Soon</div>
      </div>
    </div>
  )
}

export default Gallery