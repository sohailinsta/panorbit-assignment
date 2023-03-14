import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import "./TodoList.css";
function TodoList() {
  return (
    <div className="todoListContainer">
      <Sidebar />
      <div className="mainContent">
      <Header />
      {/* <hr className="topContainerHorizontalLine"></hr> */}
      <div className="mainContentTitle">Coming Soon</div>
      </div>
    </div>
  )
}

export default TodoList