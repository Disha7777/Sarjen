import React, { Component } from 'react'

export default class StateDemo2 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userinfo: { 
        name: "Disha", 
        position: "Software Developer", 
        company: "Sarjen Systems Pvt. Ltd."
      }
    }
  }

  updateInfo = () => {
    this.setState({
      userinfo: {
        ...this.state.userinfo, 
        name: "Disha"  
      }
    })
  }

  render() {
    return (
      <>
        <p>My name is {this.state.userinfo.name}</p>
        <p>My position is {this.state.userinfo.position}</p>
        <p>I work in {this.state.userinfo.company}</p>

        <br />
        
        <button onClick={this.updateInfo}>
          Update Info
        </button>
      </>
    )
  }
}