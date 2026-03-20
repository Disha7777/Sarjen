import React, { Component } from 'react'

export default class EventDemo extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  clickDemo(){
    alert("clicked button")
  }

  changeDemo(){
    alert("Change happen")
  }
  
  render() {
    return (
      <>
        <input type='text' onChange={this.changeDemo.bind(this)} />  
        <input type='button' value = " Click Me " onClick={this.clickDemo.bind(this)}/>
      </>
    );
  }
}

// imrc 
// rcc
// rconst