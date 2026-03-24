import React, { Component } from 'react';
import './CountdownTimer.css';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isRunning: false,
      intervalId: null
    };
  }

  startTimer = () => {
    if (this.state.isRunning) return;
    
    const intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.counter >= 10) {
          clearInterval(prevState.intervalId);
          return { isRunning: false, intervalId: null };
        }
        return { counter: prevState.counter + 1 };
      });
    }, 1000);
    
    this.setState({ isRunning: true, intervalId });
  };

  stopTimer = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({ counter: 0, isRunning: false, intervalId: null });
    }
  };

  pauseTimer = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({ isRunning: false, intervalId: null });
    }
  };

  componentWillUnmount() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  render() {
    return (
      <div className="timer-container">
        <h2>Countdown Timer (0-10)</h2>
        
        <div className="timer-display">
          <span className="timer-value">{this.state.counter}</span>
        </div>

        <div className="timer-buttons">
          <button onClick={this.startTimer} className="btn-start">Start</button>
          <button onClick={this.pauseTimer} className="btn-pause">Pause</button>
          <button onClick={this.stopTimer} className="btn-stop">Stop</button>
        </div>

        <p className="timer-note">Auto stops at 10</p>
      </div>
    );
  }
}

export default CountdownTimer;