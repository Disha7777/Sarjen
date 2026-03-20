import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    let user = JSON.parse(localStorage.getItem("user"));

    return (
      <div>
        <h2>Welcome {user?.name}</h2>
        <a href="/editprofile">Edit Profile</a> <br/>
        <a href="/changePassword">Change Password</a>
      </div>
    );
  }
}

export default Dashboard;