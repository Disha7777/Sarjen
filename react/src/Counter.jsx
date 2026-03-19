import React, { Component } from 'react'

export default class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      msg: ""
    }
  }

  componentDidMount() {
    const savedCounter = localStorage.getItem("counter")

    if (savedCounter !== null) {
      this.setState({ counter: parseInt(savedCounter) })
    }

    console.log("Loaded from localStorage")
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      localStorage.setItem("counter", this.state.counter)
      console.log("Saved to localStorage")
    }
  }

  increased = () => {
    if (this.state.counter < 10) {
      this.setState({
        counter: this.state.counter + 1,
        msg: ""
      })
    } else {
      this.setState({
        msg: "Cannot increase more than 10"
      })
    }
  }

  decreased = () => {
    if (this.state.counter <= 0) {
      this.setState({
        msg: "Cannot decrease below 0"
      })
    } else {
      this.setState({
        counter: this.state.counter - 1,
        msg: ""
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>

        <button onClick={this.increased}>Increase</button>
        <button onClick={this.decreased}>Decrease</button>

        <p>{this.state.msg}</p>
      </div>
    )
  }
}