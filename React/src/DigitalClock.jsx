import React, { Component } from 'react';
import './DigitalClock.css';

class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentTime } = this.state;
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };

    return (
      <div className="clock-container">
        <h2>Digital Clock</h2>
        
        <div className="time-display">
          <div className="time">
            {currentTime.toLocaleTimeString()}
          </div>
          <div className="date">
            {currentTime.toLocaleDateString(undefined, options)}
          </div>
        </div>

        <div className="clock-info">
          <p>Hours: {currentTime.getHours()}</p>
          <p>Minutes: {currentTime.getMinutes()}</p>
          <p>Seconds: {currentTime.getSeconds()}</p>
        </div>
      </div>
    );
  }
}

export default DigitalClock;