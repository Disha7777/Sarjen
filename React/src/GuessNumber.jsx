import React, { Component } from 'react';
import './GuessNumber.css';

class GuessNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: Math.floor(Math.random() * 100) + 1,
      guess: '',
      message: '',
      attempts: 0,
      result: null
    };
  }

  handleGuess = (e) => {
    e.preventDefault();
    const { randomNumber, guess, attempts } = this.state;
    const guessNum = parseInt(guess);

    if (isNaN(guessNum)) {
      this.setState({ message: 'Please enter a valid number!' });
      return;
    }

    if (guessNum === randomNumber) {
      this.setState({
        message: '🎉 Congratulations! You guessed it right! 🎉',
        result: 'success',
        attempts: attempts + 1
      });
    } else if (guessNum < randomNumber) {
      this.setState({
        message: 'Too low! Try a higher number.',
        result: 'failure',
        attempts: attempts + 1
      });
    } else {
      this.setState({
        message: 'Too high! Try a lower number.',
        result: 'failure',
        attempts: attempts + 1
      });
    }
  };

  resetGame = () => {
    this.setState({
      randomNumber: Math.floor(Math.random() * 100) + 1,
      guess: '',
      message: '',
      attempts: 0,
      result: null
    });
  };

  handleChange = (e) => {
    this.setState({ guess: e.target.value, message: '', result: null });
  };

  render() {
    return (
      <div className="guess-container">
        <h2>Guess the Number Game</h2>
        <p className="game-description">Guess a number between 1 and 100</p>

        <form onSubmit={this.handleGuess}>
          <div className="input-group">
            <input
              type="number"
              className="guess-input"
              placeholder="Enter your guess"
              value={this.state.guess}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn-guess">Guess</button>
          </div>
        </form>

        <button onClick={this.resetGame} className="btn-reset">New Game</button>

        {this.state.message && (
          <div className={`message ${this.state.result}`}>
            <p>{this.state.message}</p>
            {this.state.result === 'success' && (
              <p className="success-note">
                You guessed it in {this.state.attempts} attempts!
              </p>
            )}
          </div>
        )}

        <div className="game-stats">
          <p><strong>Attempts:</strong> {this.state.attempts}</p>
          <p><strong>Hint:</strong> {this.state.result === 'failure' ? 'Keep trying!' : 'Good luck!'}</p>
        </div>
      </div>
    );
  }
}

export default GuessNumber;
