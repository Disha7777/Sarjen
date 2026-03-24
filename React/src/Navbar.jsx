import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { isMenuOpen } = this.state;
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('user'));

    return (
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={this.closeMenu}>
            React<span>Demo</span>
          </Link>

          <button className="menu-icon" onClick={this.toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {/* Basic Pages */}
            <div className="nav-dropdown">
              <span className="nav-dropbtn">Pages ▾</span>
              <div className="nav-dropdown-content">
                <Link to="/" onClick={this.closeMenu}>Home</Link>
                <Link to="/about" onClick={this.closeMenu}>About</Link>
                <Link to="/contact" onClick={this.closeMenu}>Contact</Link>
              </div>
            </div>

            {/* String Operations */}
            <Link to="/string-operations" className="nav-link" onClick={this.closeMenu}>
              String Ops
            </Link>

            {/* React Demos */}
            <div className="nav-dropdown">
              <span className="nav-dropbtn">React Demos ▾</span>
              <div className="nav-dropdown-content">
                <Link to="/lifecycle" onClick={this.closeMenu}>LifeCycle</Link>
                <Link to="/state1" onClick={this.closeMenu}>State Demo 1</Link>
                <Link to="/state2" onClick={this.closeMenu}>State Demo 2</Link>
                <Link to="/counter" onClick={this.closeMenu}>Counter</Link>
                <Link to="/addition" onClick={this.closeMenu}>Sum (Validation)</Link>
                <Link to="/sum" onClick={this.closeMenu}>Sum (Object)</Link>
                <Link to="/countdown" onClick={this.closeMenu}>Countdown Timer</Link>
                <Link to="/passwordtoggle" onClick={this.closeMenu}>Password Toggle</Link>
                <Link to="/digitalclock" onClick={this.closeMenu}>Digital Clock</Link>
                <Link to="/guess-number" onClick={this.closeMenu}>Guess Number</Link>
              </div>
            </div>

            {/* Calculators */}
            <div className="nav-dropdown">
              <span className="nav-dropbtn">Calculators ▾</span>
              <div className="nav-dropdown-content">
                <Link to="/basic-calc" onClick={this.closeMenu}>Basic Calculator</Link>
                <Link to="/advanced-calc" onClick={this.closeMenu}>Advanced Calculator</Link>
                <Link to="/gst-calc" onClick={this.closeMenu}>GST Calculator</Link>
              </div>
            </div>

            {/* Todo */}
            <Link to="/todo" className="nav-link" onClick={this.closeMenu}>
              Todo List
            </Link>

            {/* Theme Toggle */}
            <Link to="/theme-toggle" className="nav-link" onClick={this.closeMenu}>
              Theme Mode
            </Link>

            {/* User Management */}
            {!isLoggedIn ? (
              <div className="nav-dropdown">
                <span className="nav-dropbtn">Account ▾</span>
                <div className="nav-dropdown-content">
                  <Link to="/signup" onClick={this.closeMenu}>Signup</Link>
                  <Link to="/login" onClick={this.closeMenu}>Login</Link>
                </div>
              </div>
            ) : (
              <div className="nav-dropdown">
                <span className="nav-dropbtn">
                  👤 {user?.name || 'User'} ▾
                </span>
                <div className="nav-dropdown-content">
                  <Link to="/dashboard" onClick={this.closeMenu}>Dashboard</Link>
                  <Link to="/editprofile" onClick={this.closeMenu}>Edit Profile</Link>
                  <Link to="/changePassword" onClick={this.closeMenu}>Change Password</Link>
                  <Link 
                    to="/login" 
                    onClick={() => {
                      localStorage.removeItem('loggedIn');
                      this.closeMenu();
                    }}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;