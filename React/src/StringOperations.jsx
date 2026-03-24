import React, { Component } from 'react';
import './StringOperations.css';

class StringOperations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: '',
      uppercase: '',
      lowercase: '',
      charCount: 0
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({
      inputString: value,
      uppercase: value.toUpperCase(),
      lowercase: value.toLowerCase(),
      charCount: value.length
    });
  };

  render() {
    return (
      <div className="string-container">
        <h2>String Operations</h2>
        
        <div className="form-group">
          <label>Enter a String:</label>
          <input
            type="text"
            className="form-input"
            placeholder="Type something..."
            value={this.state.inputString}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="result-card">
          <h3>Results:</h3>
          <p><strong>Uppercase:</strong> {this.state.uppercase}</p>
          <p><strong>Lowercase:</strong> {this.state.lowercase}</p>
          <p><strong>Character Count:</strong> {this.state.charCount}</p>
        </div>
      </div>
    );
  }
}

export default StringOperations;