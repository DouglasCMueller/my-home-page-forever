import React, { Component } from "react";
import Header from "../components/Header/index"
import DateShown from "../components/DateShown"
import Timer from "../components/Timer"
import WeatherShown from "../components/Weather"
import GoogleNews from "../components/GoogleNews"
import StockQuoteShown from "../components/AlphaAdvantageStockQuotes"
import { Grid, } from 'semantic-ui-react'
import API from "../utils/API";
import "../App.css"

let id = localStorage.getItem("id")

class Home extends Component {
  state = {

    user: {},
    fname: "",
    lname: "",
    locationcity: "",
    locationstate: "",
    email: "",
    password: "",
    events: [],
    todos: [],
    favoritewebsites: []
  
  };

  componentDidMount() {
    this.loadUserDetails();
  }
  loadUserDetails = () => {
    API.getUser(id)
      .then(res => {

        this.setState({

          fname: res.data.fname,
          lname: res.data.lname,
          email: res.data.email,
          events: res.data.event,
          todos: res.data.todo,
          favorites: res.data.favorite,
          locationcity: res.data.locationcity,
          locationstate: res.data.locationstate
   
        })
      })
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <>
        <Header />
        <div className="mainContentContainer">
        <Grid>
          <Grid.Column width={4}>
            <div className="welcomeContainer"><i className="fas fa-sun"></i> Good Morning, {this.state.fname}
       
            </div>
            <div className="timeContainer">
              <DateShown />

              <Timer />
        
            </div>
            <div className="timeContainer">
           <strong>Weather in: {this.state.locationcity},{this.state.locationstate}</strong>
              <WeatherShown />
            </div>
            <div className="timeContainer">
            <strong>Stock Market</strong>
       <StockQuoteShown />
        
            </div>
            <div className="timeContainer">
   
              <GoogleNews />
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div className="homePageEventsContainer">
              <div className="homePageEventTitle"><i className="far fa-calendar-alt"></i> Events List</div>
              <a className="eventsPageLink" href="/events">Click to add/edit event</a>
              {this.state.events.map(event => (
           
            <div key={event.title}>
              
              Date: {event.date} | Title: {event.title} | Note: {event.note}
            </div>
          ))}
            </div>
            <div className="homePageEventsContainer">
              <div className="homePageEventTitle"><i className="fab fa-elementor"></i> Todos List</div>
              <a className="eventsPageLink" href="/todos">Click to add/edit todo</a>
              {this.state.events.map(todo => (
           
            <div key={todo.title}>
            Title: {todo.title} | Note: {todo.note}
            </div>
          ))}
            </div>

          </Grid.Column>
          <Grid.Column width={4}>
          <div className="favoritesContainer">
              <div className="favoritesTitle"><i className="fab fa-chrome"></i> Favorite Websites</div>
              <a className="websitesPageLink" href="/websites">Click to add/edit websites</a>
         <div>test</div>
            </div>
          </Grid.Column>
        </Grid>
        </div>
      </>
    );
  }
}

export default Home;

