import React, { Component } from 'react';
import './PasswordToggle.css';

class PasswordToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      showPassword: false
    };
  }

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className="password-container">
        <h2>Password Toggle</h2>
        
        <div className="password-input-group">
          <input
            type={this.state.showPassword ? 'text' : 'password'}
            className="password-input"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button onClick={this.togglePassword} className="toggle-btn">
            {this.state.showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <div className="password-info">
          <p>Current Password: {this.state.password}</p>
          <p>Mode: {this.state.showPassword ? 'Visible' : 'Hidden'}</p>
        </div>
      </div>
    );
  }
}

export default PasswordToggle;