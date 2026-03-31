import React, { Component } from 'react';
import './CurrencyConverter.css';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      fromCurrency: 'USD',
      toCurrency: 'INR',
      convertedAmount: null,
      exchangeRate: null,
      currencies: [
  { code: 'USD', name: 'United States Dollar' },
  { code: 'INR', name: 'Indian Rupee' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound Sterling' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'SGD', name: 'Singapore Dollar' },
  { code: 'CHF', name: 'Swiss Franc' }
],
      loading: false,
      error: null,
      lastUpdated: null
    };
  }

  componentDidMount() {
    // Fetch exchange rates when component mounts
    this.fetchExchangeRates();
  }

  fetchExchangeRates = async () => {
    const { fromCurrency, toCurrency } = this.state;
    this.setState({ loading: true, error: null });
    
    try {
      // Using a free exchange rate API (ExchangeRate-API)
      // Note: You need to sign up for a free API key at https://app.exchangerate-api.com/sign-up
      // For demo purposes, I'm using a mock API response
      
      // Uncomment this when you have API key:
      // const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      // const data = await response.json();
      // const rate = data.rates[toCurrency];
      
      // Mock data for demo (replace with actual API call)
      const mockRates = {
        USD: 1,
        INR: 83.5,
        EUR: 0.92,
        GBP: 0.79,
        JPY: 150.2,
        CAD: 1.35,
        AUD: 1.52,
        CNY: 7.19,
        SGD: 1.34,
        CHF: 0.89
      };
      
      // Calculate rate based on fromCurrency to toCurrency
      let rate;
      if (fromCurrency === 'USD') {
        rate = mockRates[toCurrency];
      } else if (toCurrency === 'USD') {
        rate = 1 / mockRates[fromCurrency];
      } else {
        // Convert through USD
        const fromRate = mockRates[fromCurrency];
        const toRate = mockRates[toCurrency];
        rate = toRate / fromRate;
      }
      
      this.setState({ 
        exchangeRate: rate,
        loading: false,
        lastUpdated: new Date().toLocaleString()
      });
      
      // Auto convert if amount is entered
      if (this.state.amount) {
        this.convertCurrency(rate);
      }
      
    } catch (error) {
      this.setState({ 
        error: 'Failed to fetch exchange rates. Please try again.',
        loading: false 
      });
    }
  };

  convertCurrency = (rate = null) => {
    const { amount, exchangeRate } = this.state;
    const finalRate = rate || exchangeRate;
    
    if (amount && finalRate) {
      const result = parseFloat(amount) * finalRate;
      this.setState({ convertedAmount: result.toFixed(2) });
    } else {
      this.setState({ convertedAmount: null });
    }
  };

  handleAmountChange = (e) => {
    const value = e.target.value;
    this.setState({ amount: value }, () => {
      this.convertCurrency();
    });
  };

  handleFromCurrencyChange = (e) => {
    const fromCurrency = e.target.value;
    this.setState({ fromCurrency }, () => {
      this.fetchExchangeRates();
    });
  };

  handleToCurrencyChange = (e) => {
    const toCurrency = e.target.value;
    this.setState({ toCurrency }, () => {
      this.fetchExchangeRates();
    });
  };

  swapCurrencies = () => {
    const { fromCurrency, toCurrency, amount, convertedAmount } = this.state;
    this.setState({
      fromCurrency: toCurrency,
      toCurrency: fromCurrency,
      amount: convertedAmount,
      convertedAmount: amount
    }, () => {
      this.fetchExchangeRates();
    });
  };

  render() {
    const { 
      amount, 
      fromCurrency, 
      toCurrency, 
      convertedAmount, 
      exchangeRate,
      currencies,
      loading,
      error,
      lastUpdated
    } = this.state;

    return (
      <div className="currency-container">
        <h2 className="currency-title">💱 Currency Converter</h2>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="currency-converter">
          {/* Amount Input */}
          <div className="input-group">
            <label>Amount</label>
            <input
              type="number"
              className="amount-input"
              placeholder="Enter amount"
              value={amount}
              onChange={this.handleAmountChange}
            />
          </div>

          {/* Currency Selection */}
          <div className="currency-selectors">
            <div className="currency-selector">
              <label>From</label>
              <select 
                value={fromCurrency} 
                onChange={this.handleFromCurrencyChange}
                className="currency-select"
              >
               {currencies.map(currency => (
  <option key={currency.code} value={currency.code}>
    {currency.code} - {currency.name}
  </option>
))}
              </select>
            </div>

            <button 
              className="swap-button"
              onClick={this.swapCurrencies}
              title="Swap currencies"
            >
              ⇄
            </button>

            <div className="currency-selector">
              <label>To</label>
              <select 
                value={toCurrency} 
                onChange={this.handleToCurrencyChange}
                className="currency-select"
              >
                {this.state.currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Loading Indicator */}
          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Fetching latest exchange rates...</p>
            </div>
          )}

          {/* Exchange Rate Display */}
          {exchangeRate && !loading && (
            <div className="exchange-rate-info">
              <p>
                1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
              </p>
              {lastUpdated && (
                <small>Last updated: {lastUpdated}</small>
              )}
            </div>
          )}

          {/* Converted Result */}
          {convertedAmount && !loading && (
            <div className="conversion-result">
              <div className="result-card">
                <p className="result-label">Converted Amount</p>
                <p className="result-amount">
                  {amount} {fromCurrency} = 
                  <span className="result-value"> {convertedAmount} {toCurrency}</span>
                </p>
              </div>
            </div>
          )}
<select>
  {this.state.currencies.map((currency) => (
    <option key={currency.code} value={currency.code}>
      {currency.code} ({currency.name})
    </option>
  ))}
</select>

          {/* Popular Conversion Rates */}
          <div className="popular-rates">
            <h3>Popular Conversion Rates</h3>
            <div className="rates-grid">
              <div className="rate-card">
                <span className="rate-pair">USD to INR</span>
                <span className="rate-value">1 USD = 83.50 INR</span>
              </div>
              <div className="rate-card">
                <span className="rate-pair">USD to EUR</span>
                <span className="rate-value">1 USD = 0.92 EUR</span>
              </div>
              <div className="rate-card">
                <span className="rate-pair">EUR to USD</span>
                <span className="rate-value">1 EUR = 1.09 USD</span>
              </div>
              <div className="rate-card">
                <span className="rate-pair">GBP to USD</span>
                <span className="rate-value">1 GBP = 1.27 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;