import React, { Component } from 'react';
import './GSTCalculator.css';

class GSTCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      gstRate: 18,
      gstAmount: null,
      totalAmount: null,
      calculationType: 'inclusive' // inclusive or exclusive
    };
  }

  calculateGST = () => {
    const { amount, gstRate, calculationType } = this.state;
    
    if (amount === '' || isNaN(amount)) {
      this.setState({ gstAmount: null, totalAmount: null });
      return;
    }

    const baseAmount = parseFloat(amount);
    const rate = parseFloat(gstRate);
    let gstAmount, totalAmount;

    if (calculationType === 'inclusive') {
      // GST is included in the amount
      gstAmount = (baseAmount * rate) / (100 + rate);
      totalAmount = baseAmount;
    } else {
      // GST is added to the amount
      gstAmount = (baseAmount * rate) / 100;
      totalAmount = baseAmount + gstAmount;
    }

    this.setState({ gstAmount: gstAmount.toFixed(2), totalAmount: totalAmount.toFixed(2) });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.amount !== this.state.amount || 
        prevState.gstRate !== this.state.gstRate ||
        prevState.calculationType !== this.state.calculationType) {
      this.calculateGST();
    }
  }

  render() {
    return (
      <div className="gst-container">
        <h2>GST Calculator</h2>
        
        <div className="gst-form">
          <div className="form-group">
            <label>Amount (₹)</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter amount"
              value={this.state.amount}
              onChange={(e) => this.setState({ amount: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>GST Rate (%)</label>
            <select
              className="form-select"
              value={this.state.gstRate}
              onChange={(e) => this.setState({ gstRate: e.target.value })}
            >
              <option value="0">0%</option>
              <option value="5">5%</option>
              <option value="12">12%</option>
              <option value="18">18%</option>
              <option value="28">28%</option>
            </select>
          </div>

          <div className="form-group">
            <label>Calculation Type</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="inclusive"
                  checked={this.state.calculationType === 'inclusive'}
                  onChange={(e) => this.setState({ calculationType: e.target.value })}
                />
                GST Inclusive
              </label>
              <label>
                <input
                  type="radio"
                  value="exclusive"
                  checked={this.state.calculationType === 'exclusive'}
                  onChange={(e) => this.setState({ calculationType: e.target.value })}
                />
                GST Exclusive
              </label>
            </div>
          </div>
        </div>

        {this.state.gstAmount !== null && this.state.totalAmount !== null && (
          <div className="gst-results">
            <h3>GST Breakdown</h3>
            <div className="result-row">
              <span>Original Amount:</span>
              <strong>₹ {this.state.amount}</strong>
            </div>
            <div className="result-row">
              <span>GST Amount ({this.state.gstRate}%):</span>
              <strong>₹ {this.state.gstAmount}</strong>
            </div>
            <div className="result-row total">
              <span>Total Amount:</span>
              <strong>₹ {this.state.totalAmount}</strong>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GSTCalculator;