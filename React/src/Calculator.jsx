import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false
    };
  }

  inputDigit = (digit) => {
    const { display, waitingForOperand } = this.state;
    
    if (waitingForOperand) {
      this.setState({
        display: String(digit),
        waitingForOperand: false
      });
    } else {
      this.setState({
        display: display === '0' ? String(digit) : display + digit
      });
    }
  };

  inputDecimal = () => {
    const { display, waitingForOperand } = this.state;
    
    if (waitingForOperand) {
      this.setState({
        display: '0.',
        waitingForOperand: false
      });
    } else if (display.indexOf('.') === -1) {
      this.setState({
        display: display + '.'
      });
    }
  };

  clearDisplay = () => {
    this.setState({
      display: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false
    });
  };

  performOperation = (nextOperation) => {
    const { display, previousValue, operation, waitingForOperand } = this.state;
    const inputValue = parseFloat(display);
    
    if (previousValue === null && !waitingForOperand) {
      this.setState({
        previousValue: inputValue,
        operation: nextOperation,
        waitingForOperand: true
      });
    } else if (operation && previousValue !== null && !waitingForOperand) {
      const currentValue = previousValue;
      let newValue;
      
      switch (operation) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '*':
          newValue = currentValue * inputValue;
          break;
        case '/':
          newValue = currentValue / inputValue;
          break;
        default:
          newValue = inputValue;
      }
      
      this.setState({
        display: String(newValue),
        previousValue: newValue,
        operation: nextOperation,
        waitingForOperand: true
      });
    }
  };

  calculateResult = () => {
    const { display, previousValue, operation, waitingForOperand } = this.state;
    
    if (!waitingForOperand && operation && previousValue !== null) {
      const inputValue = parseFloat(display);
      let result;
      
      switch (operation) {
        case '+':
          result = previousValue + inputValue;
          break;
        case '-':
          result = previousValue - inputValue;
          break;
        case '*':
          result = previousValue * inputValue;
          break;
        case '/':
          result = previousValue / inputValue;
          break;
        default:
          result = inputValue;
      }
      
      this.setState({
        display: String(result),
        previousValue: null,
        operation: null,
        waitingForOperand: false
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">
          {this.state.display}
        </div>
        
        <div className="calculator-buttons">
        <button onClick={this.clearDisplay} className="btn-clear">C</button>
        <button onClick={() => this.performOperation('/')} className="btn-operator">÷</button>
        <button onClick={() => this.performOperation('*')} className="btn-operator">×</button>
        <button onClick={() => this.performOperation('-')} className="btn-operator">-</button>

         <button onClick={() => this.inputDigit(7)}>7</button>
        <button onClick={() => this.inputDigit(8)}>8</button>
        <button onClick={() => this.inputDigit(9)}>9</button>
        <button onClick={() => this.performOperation('+')} className="btn-operator">+</button>

        <button onClick={() => this.inputDigit(4)}>4</button>
        <button onClick={() => this.inputDigit(5)}>5</button>
        <button onClick={() => this.inputDigit(6)}>6</button>
        <button onClick={this.calculateResult} className="btn-equals">=</button>

        <button onClick={() => this.inputDigit(1)}>1</button>
        <button onClick={() => this.inputDigit(2)}>2</button>
        <button onClick={() => this.inputDigit(3)}>3</button>

        <button onClick={() => this.inputDigit(0)} className="btn-zero">0</button>
        <button onClick={this.inputDecimal}>.</button>
        </div>
      </div>
    );
  }
}

export default Calculator;