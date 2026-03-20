import React, { Component } from "react";

class ChangePassword extends Component {
  state = { oldPass: "", newPass: "", msg: "" };

  handleChange = () => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user.password === this.state.oldPass) {
      user.password = this.state.newPass;
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({ msg: "Password updated" });
    } else {
      this.setState({ msg: "Wrong old password" });
    }
  };

  render() {
    return (
      <div>
        <h2>Change Password</h2>
        <input type="password" placeholder="Old Password" onChange={(e)=>this.setState({oldPass:e.target.value})}/>
        <input type="password" placeholder="New Password" onChange={(e)=>this.setState({newPass:e.target.value})}/>
        <button onClick={this.handleChange}>Update</button>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default ChangePassword;