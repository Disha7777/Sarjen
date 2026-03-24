import React, { Component } from 'react';
import './BasicCalculator.css';

class BasicCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: null,
      operation: '+'
    };
  }

  handleCalculate = () => {
    const { num1, num2, operation } = this.state;
    
    if (num1 === '' || num2 === '') {
      this.setState({ result: 'Please enter both numbers' });
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    switch(operation) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
        break;
      default:
        result = 0;
    }

    this.setState({ result });
  };

  render() {
    return (
      <div className="calc-container">
        <h2>Basic Calculator</h2>
        
        <div className="calc-inputs">
          <input
            type="number"
            className="calc-input"
            placeholder="First number"
            value={this.state.num1}
            onChange={(e) => this.setState({ num1: e.target.value })}
          />
          
          <select
            className="calc-operator"
            value={this.state.operation}
            onChange={(e) => this.setState({ operation: e.target.value })}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </select>
          
          <input
            type="number"
            className="calc-input"
            placeholder="Second number"
            value={this.state.num2}
            onChange={(e) => this.setState({ num2: e.target.value })}
          />
        </div>
        
        <button onClick={this.handleCalculate} className="btn-calculate">
          Calculate
        </button>
        
        {this.state.result !== null && (
          <div className="calc-result">
            <h3>Result: {this.state.result}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default BasicCalculator;