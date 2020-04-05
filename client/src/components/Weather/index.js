import React from 'react';
import axios from 'axios';
import API from "../../utils/API";
import apiConfig from '../../apiKeys';
import './style.css'

let userId = window.localStorage.getItem("id")

let locationcityApi = "";
let locationstateApi = "";
let mainTemperatureKelvin = 0;
let mainTemperatureFahrenheit = 0;
let forecast = "";

export default class DateShown extends React.Component {
    state = {
        user: {},
        locationcity: "",
        locationstate: "",
    };

    componentDidMount() {
        this.loadUserDetails();
    }
    loadUserDetails = () => {
        API.getUserById(userId)
            .then(res => {

                this.setState({

                    locationcity: res.data.locationcity,
                    locationstate: res.data.locationstate

                })

                locationcityApi = this.state.locationcity
                locationstateApi = this.state.locationstate
    
let weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="
+ locationcityApi + "," + locationstateApi + "," +
apiConfig.googleWeatherApiKey
                axios.get(weatherUrl)

                    .then(res => {

                        mainTemperatureKelvin = res.data.main.temp;
                        mainTemperatureFahrenheit = Math.round((mainTemperatureKelvin - 273.15) * 9 / 5 + 32);
                  
                        forecast = res.data.weather[0].description
                        this.setState({
                            maintemperature: mainTemperatureFahrenheit,
                            forecast: forecast
                        });
                    })

            })
            .catch(err => console.log(err));
    };




    render() {
        return (
            <div>
                <p className="weatherP">Current Temp: {this.state.maintemperature} F</p>
                <p className="weatherP">Forecast: {this.state.forecast}</p>
            </div>
        )
    }
}