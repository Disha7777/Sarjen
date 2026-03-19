import React, { Component } from 'react'

export default class SumUsingObject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numbers: {
        num1: '',
        num2: ''
      },
      result: null,
      error: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      numbers: {
        ...this.state.numbers,
        [name]: value
      },
      error: ''
    })
  }

  handleSum = () => {
    const { num1, num2 } = this.state.numbers

    // Validation
    if (num1 === '' || num2 === '') {
      this.setState({ error: 'Both fields are required', result: null })
      return
    }

    if (isNaN(num1) || isNaN(num2)) {
      this.setState({ error: 'Please enter valid numbers', result: null })
      return
    }

    // Sum using object values
    const sum = parseFloat(num1) + parseFloat(num2)

    this.setState({
      result: sum,
      error: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Sum Using Object</h2>

        <input
          type="text"
          name="num1"
          placeholder="Enter first number"
          value={this.state.numbers.num1}
          onChange={this.handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="num2"
          placeholder="Enter second number"
          value={this.state.numbers.num2}
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