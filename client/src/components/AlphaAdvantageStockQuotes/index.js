import React from 'react';
import './style.css'
import axios from 'axios';

export default class StockQuoteShown extends React.Component {

  state = {
    stockName: "",
    stockQuoteSymbol: "",
    stockQuotePrice: "",
    stockSymbol: "",
    stockQuoteChange: "",
    stockQuoteVolume: ""
  };

  handleInputChange = event => {

    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  handleKeyPress(event) {

    var code = event.keyCode || event.which;
    if (code === 13) {

      const userStockSymbol = this.state.stockSymbol

      axios({
        "method": "GET",
        "url": "https://alpha-vantage.p.rapidapi.com/query",
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
          "x-rapidapi-key": "58493bb433mshd3877b6f9e16f1ep12332ajsn963b290af47d"
        }, "params": {
          "symbol": userStockSymbol,
          "function": "GLOBAL_QUOTE"
        }
      })
        .then((response) => {

          let stockPriceForDisplay = response.data['Global Quote']['05. price']
          let stockPriceForDisplayTwoDecimals = Number(stockPriceForDisplay).toFixed(2)

          let stockChangeForDisplay = response.data['Global Quote']['09. change']
          let stockChangeForDisplayTwoDecimals = Number(stockChangeForDisplay).toFixed(2)

          let stockVolumeForDisplay = response.data['Global Quote']['06. volume']
          let stockVolumeForDisplayWithCommas = stockVolumeForDisplay.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

          this.setState({
            stockQuoteSymbol: response.data['Global Quote']['01. symbol'],
            stockQuotePrice: stockPriceForDisplayTwoDecimals,
            stockQuoteChange: stockChangeForDisplayTwoDecimals,
            stockQuoteVolume: stockVolumeForDisplayWithCommas
          })

        })
        .catch((error) => {
          console.log(error)
        })
      this.setState({ stockSymbol: "" })
    }

  }

  render() {
    return (
      <div>
        <div className="stockMarketQuote">
          <input className="stockSymbolInput"
            type="text"
            placeholder="Enter Symbol"
            name="stockSymbol"
            onChange={this.handleInputChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            value={this.state.stockSymbol}
          />

          <p className="stockQuoteP">Symbol: {this.state.stockQuoteSymbol} </p>
          <p className="stockQuoteP">Current Price: {this.state.stockQuotePrice} </p>
          <p className="stockQuoteP">Change on Day: {this.state.stockQuoteChange}</p>
          <p className="stockQuoteP">Volume: {this.state.stockQuoteVolume}</p>

        </div>
      </div>
    )
  }
}