import React, { Component } from 'react'

export default class Addition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num1: '',
      num2: '',
      result: null,
      error: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ''
    })
  }

  handleSum = () => {
    const { num1, num2 } = this.state

    // Validation
    if (num1 === '' || num2 === '') {
      this.setState({ error: 'Both fields are required', result: null })
      return
    }

    if (isNaN(num1) || isNaN(num2)) {
      this.setState({ error: 'Please enter valid numbers', result: null })
      return
    }

    // Convert to numbers and calculate sum
    const sum = parseFloat(num1) + parseFloat(num2)

    this.setState({
      result: sum,
      error: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Addition with Validation</h2>

        <input
          type="text"
          name="num1"
          placeholder="Enter first number"
          value={this.state.num1}
          onChange={this.handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="num2"
          placeholder="Enter second number"
          value={this.state.num2}
          onChange={this.handleChange}
        />

        <br /><br />

        <button onClick={this.handleSum}>Add</button>

        <br /><br />

        {this.state.error && (
          <p style={{ color: 'red' }}>{this.state.error}</p>
        )}

        {this.state.result !== null && (
          <p>Result: {this.state.result}</p>
        )}
      </div>
    )
  }
}