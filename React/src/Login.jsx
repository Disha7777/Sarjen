import React, { Component } from "react";

class Login extends Component {
  state = { email: "", password: "", error: "" };

  handleLogin = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === this.state.email && user.password === this.state.password) {
      localStorage.setItem("loggedIn", true);
      window.location.href = "/dashboard";
    } else {
      this.setState({ error: "Invalid credentials" });
    }
  };

  render() {
    return (
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <input placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})}/>
          <input type="password" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})}/>
          <span>{this.state.error}</span>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;