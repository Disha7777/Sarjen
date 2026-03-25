import React, { Component } from "react";

class ThemeToggle extends Component {
  constructor() {
    super();
    this.state = {
      isDark: false,
    };
  }

toggleTheme = () => {
  const isDark = document.body.classList.contains("dark");

  if (isDark) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    this.setState({ isDark: false });
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    this.setState({ isDark: true });
  }
};

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Theme Toggle</h2>

        <button onClick={this.toggleTheme}>
          {this.state.isDark ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>
    );
  }
}

export default ThemeToggle;