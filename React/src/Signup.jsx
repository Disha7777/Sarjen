import React, { Component } from "react";


class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
  }

  validate = () => {
    let errors = {};
    let isValid = true;

    if (!this.state.name) {
      errors.name = "Name required";
      isValid = false;
    }

    if (!this.state.email.includes("@")) {
      errors.email = "Valid email required";
      isValid = false;
    }

    if (this.state.password.length < 6) {
      errors.password = "Min 6 characters";
      isValid = false;
    }

    if (this.state.password !== this.state.confirmPassword) {
      errors.confirmPassword = "Passwords not match";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validate()) {
      localStorage.setItem("user", JSON.stringify(this.state));
      window.location.href = "/login";
    }
  };

  render() {
    return (
      <div className="form-container">
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Name" onChange={(e)=>this.setState({name:e.target.value})}/>
          <span>{this.state.errors.name}</span>

          <input placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})}/>
          <span>{this.state.errors.email}</span>

          <input type="password" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})}/>
          <span>{this.state.errors.password}</span>

          <input type="password" placeholder="Confirm Password" onChange={(e)=>this.setState({confirmPassword:e.target.value})}/>
          <span>{this.state.errors.confirmPassword}</span>

          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;