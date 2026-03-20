import React, { Component } from "react";

class EditProfile extends Component {
  constructor() {
    super();
    let user = JSON.parse(localStorage.getItem("user"));
    this.state = { ...user };
  }

  handleUpdate = () => {
    localStorage.setItem("user", JSON.stringify(this.state));
    alert("Updated");
    window.location.href = "/dashboard";
  };

  render() {
    return (
      <div>
        <h2>Edit Profile</h2>
        <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
        <input value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
        <button onClick={this.handleUpdate}>Save</button>
      </div>
    );
  }
}

export default EditProfile;