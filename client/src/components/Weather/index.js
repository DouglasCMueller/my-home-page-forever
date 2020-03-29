import React from 'react';
import axios from 'axios';
import API from "../../utils/API";
import './style.css'

let id = window.localStorage.getItem("id")

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
        API.getUser(id)
            .then(res => {

                this.setState({

                    locationcity: res.data.locationcity,
                    locationstate: res.data.locationstate

                })

                locationcityApi = this.state.locationcity
                locationstateApi = this.state.locationstate
                console.log(locationcityApi, locationstateApi)
let weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="
+ locationcityApi + "," + locationstateApi + "," +
"us&appid=0e6eab324d282d4253d4d8261f5884b9"
                axios.get(weatherUrl)

                    .then(res => {

                        mainTemperatureKelvin = res.data.main.temp;
                        mainTemperatureFahrenheit = Math.round((mainTemperatureKelvin - 273.15) * 9 / 5 + 32);
                        console.log(res.data.weather[0].description)
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