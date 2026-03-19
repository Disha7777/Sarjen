import React, { Component } from 'react'

export default class LifeCycle extends Component {

  constructor(props) {
    super(props)
    console.log("1. constructor")

    this.state = {
      count: 0,
      show: true
    }
  }
  componentDidMount() {
    console.log("3. componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  updateState = () => {
    this.setState({ count: this.state.count + 1 })
  }

  

  render() {
    console.log("2. render")

    return (
      <>
        <h1>Lifecycle Demo</h1>
        <h2>Count: {this.state.count}</h2>

        <button onClick={this.updateState}>
          Update State
        </button>
      </>
    )
  }
}
