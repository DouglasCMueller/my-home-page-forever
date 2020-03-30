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

let userId = localStorage.getItem("id")

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
    API.getUserById(userId)
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
          <Grid.Column width={3}>
            <div className="welcomeContainer"><i className="fas fa-sun"></i> Good Morning, {this.state.fname}
       
            </div>
            <div className="timeContainer">
              <DateShown />

              <Timer />
        
            </div>
            <div className="weatherContainer">
          Weather in: {this.state.locationcity},{this.state.locationstate}
              <WeatherShown />
            </div>
            <div className="stockMarketContainer">
         Stock Market
       <StockQuoteShown />
   
            </div>
           
          </Grid.Column>

          <Grid.Column width={3}>
          <div className="headlineContainer"><i class="far fa-newspaper"></i> Current Headlines</div>
   <div>
              <GoogleNews />
            
            </div>
          </Grid.Column>



          <Grid.Column width={6}>
      

              <div className="homePageEventTitle"><i className="far fa-calendar-alt"></i> Events List</div>
            <div className="eventsPageLinkContainer"> <a className="eventsPageLink" href="/events">Click to add/edit event</a>
          </div>
          
              <div className="homePageEventsContainer">
              {this.state.events.map(event => (
         
         <div className="homePageEventsListContainer" key={event.title}>
         <p className="homePageEventListEachContainer"><strong>Date:     </strong>{event.date}</p>
         <p className="homePageEventListEachContainer"><strong>Time:     </strong>{event.time}</p>
         <p className="homePageEventListEachContainer"><strong>Title:     </strong>{event.title}</p>
         <p className="homePageEventListEachContainer"><strong>Note:     </strong>{event.note}</p>
         
       </div>
          ))}
            </div>

    
              <div className="homePageTodoTitle"><i className="fab fa-elementor"></i> Todos List</div>
              <div className="todosPageLinkContainer"> <a className="todosPageLink" href="/todos">Click to add/edit todo</a>
              </div>

              <div className="homePageTodosContainer">
              {this.state.todos.map(todo => (
                
           <div className="homePageTodosListContainer" key={todo.title}>
           <p className="homePageTodoListEachContainer"><strong>Title:     </strong>{todo.title}</p>
           <p className="homePageTodoListEachContainer"><strong>Note:     </strong>{todo.note}</p>
           
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

