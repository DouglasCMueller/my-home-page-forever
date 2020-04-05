import React from 'react';
import axios from 'axios';
import './style.css'

export default class FunFactOfTheDay extends React.Component {
    state = {
        funfact: ""
    };

    componentDidMount() {
        this.loadFunFactOfTheDay();
    }
    loadFunFactOfTheDay = () => {

        let funFactUrl = 'https://numbersapi.com/random'
        axios.get(funFactUrl)

            .then(res => {

                this.setState({
                    funFact: res.data

                })
            })
    }

    render() {
        return (
            <div className="funFactOfTheDayContainer">
                {this.state.funFact}

            </div>
        )
    }
}