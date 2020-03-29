import React from 'react';
import './style.css'

export default class StockQuoteShown extends React.Component {
    state = {
        stockName: "",
        stockQuoteSymbol: "",
        stockQuotePrice: "" 
        
    };

    componentDidMount() {
        this.loadStockQuote();
    }
    loadStockQuote = () => {
       
        const axios = require("axios");

        axios({
            "method":"GET",
            "url":"https://alpha-vantage.p.rapidapi.com/query",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"alpha-vantage.p.rapidapi.com",
            "x-rapidapi-key":"58493bb433mshd3877b6f9e16f1ep12332ajsn963b290af47d"
            },"params":{
            "symbol":"DJI",
            "function":"GLOBAL_QUOTE"
            }
            })
            .then((response)=>{
                console.log(response.data['Global Quote']['05. price'])
             
              
                this.setState({
                    stockQuoteSymbol: response.data['Global Quote']['01. symbol'],
                    stockQuotePrice: Math.round(response.data['Global Quote']['05. price'])
            
                       })
            
            })
            .catch((error)=>{
              console.log(error)
            })
    };




    render() {
        return (
            <div>

                <p className="stockQuoteP">Symbol: {this.state.stockQuoteSymbol} </p>
                <p className="stockQuoteP">Current Price: {this.state.stockQuotePrice} </p>
               
            </div>
        )
    }
}