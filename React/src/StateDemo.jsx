import React, { Component } from 'react'

export default class StateDemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0
      }
    }

    increased(){
        this.state.counter < 10 ? 
        this.setState(
           { counter : this.state.counter + 1 ,msg :" "} 
        ) : 
        this.setState(
           { msg : "we can not increased grater than 5 ." } 
        ) 
    }

    decreased(){
        this.state.counter <= 0 ? 
        this.setState(
           { msg : "we can not decreased because of 0 ." } 
        ) :
        this.setState(
           { counter : this.state.counter - 1 , msg:" "} 
        )
    }
    
  render() {
    return (
      <div>
         <p>{this.state.counter}</p>
         <input type='button' value="increase" onClick={this.increased.bind(this)}  />
         <input type='button' value="decrease" onClick={this.decreased.bind(this)}  />
         <p>{this.state.msg}</p>
      </div>
    )
  }
}