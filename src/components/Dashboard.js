import "./Dashboard.css";
import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    return fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json())
      .then((data) => {
        let result = data.users;
        console.log(data);
        setUser(result);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="dashboardTheme">
      <img className="dashboardTheme" src="/images/backgroundTheme.jpg" alt="theme" />
    <div className="dashboardContainer">
      <div className="dashboardTitle pt-4">Select an account</div>
      <div className="demo">
      {user &&
        user.length > 0 &&
        user.map((userObj, index) => (
          <div key={userObj.id}>
            <div className="dashboardAccounts d-flex mt-3 ms-4">
              <Avatar src={userObj.profilepicture} alt="Remy Sharp" />
              <Link className="dashboardAccountsLinkColor" to={`/user/${userObj.id}`} state={{profilePic: userObj.profilepicture}}>
              <div className="dashboardAccountsName" >{userObj.name}</div>
              </Link>
            </div>
            <hr className="horizontalline mt-2"></hr>
          </div>
        ))}
    </div>
    </div>
    </div>
  );
}
export default Dashboard;