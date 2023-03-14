import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const { id } = useParams();
  return (
      <div className="sidebar my-4 mx-3">
        <div className="sidebarItemsChecked ps-4">
          <h6>user</h6>
          <hr className="sidebarItemsHorizontalLine"></hr>
        </div>
        <div className="sidebarItems ps-4">
          <Link className="sidebarItemPost" to={`/post/${id}`} state={{profilePic: "post"}}  >
            <h6>Post</h6>
          </Link>
          <hr className="sidebarItemsHorizontalLine"></hr>
        </div>
        <div className="sidebarItems ps-4">
        <Link className="sidebarItemPost" to={`/gallery/${id}`} state={{profilePic: "gallery"}}>
          <h6>Gallery</h6>
          </Link>
          <hr className="sidebarItemsHorizontalLine"></hr>
        </div>
        <div className="sidebarItems ps-4">
        <Link className="sidebarItemPost" to={`/todolist/${id}`} state={{profilePic: "todo"}}>
          <h6>ToDo</h6>
          </Link>
          <hr className="sidebarItemsHorizontalLine"></hr>
        </div>
      </div>
  );
}

export default Sidebar;
