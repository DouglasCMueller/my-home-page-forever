import React, { Component } from "react";
import Header from "../components/Header/index"
import DateShown from "../components/DateShown"
import Timer from "../components/Timer"
import WeatherShown from "../components/Weather"
import FunFactOfTheDay from "../components/FunFactOfTheDay"
import GoogleNews from "../components/GoogleNews"
import StockQuoteShown from "../components/AlphaAdvantageStockQuotes"
import ReactPlayer from 'react-player'
import ReactPlayerVideo from '../components/media/media.json'
import { Grid } from 'semantic-ui-react'
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
    userfavoritewebsites: []
  
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
          userfavoritewebsites: res.data.favoritewebsite,
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
            <div className="weatherContainer">
          Weather in: {this.state.locationcity},{this.state.locationstate}
              <WeatherShown />
            </div>


            <div className="stockMarketContainer">
         Stock Market
       <StockQuoteShown />
   
            </div>

            <div className="funFactOfTheDayContainer">
              <div className="funFactOfTheDayTitle">Random Number Fact:</div>

<FunFactOfTheDay />
</div>
            <div className="reactPlayerContainer">
            <ReactPlayer 
            width="350px"
            height="200px"
            url="https://www.youtube.com/watch?v=jWZ23VZ3Wcg"
            playing={true}
            loop={true} />
            </div>
           
          </Grid.Column>

          <Grid.Column width={3}>
          <div className="headlineContainer"><i className="far fa-newspaper"></i> Current Headlines</div>
   <div className="individualHeadlineContainer">
              <GoogleNews />
            
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
      
              <div className="homePageEventTitle"><i className="far fa-calendar-alt"></i> Events List</div>
            <div className="eventsPageLinkContainer"> <a className="eventsPageLink" href="/events">Click here to add/delete events</a>
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
              <div className="todosPageLinkContainer"> <a className="todosPageLink" href="/todos">Click here to add/delete todos</a>
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
          <div className="homePageWebsiteTitle"><i className="fab fa-chrome"></i> Favorite Websites</div>
            <div className="websitesPageLinkContainer"> <a className="websitesPageLink" href="/websites">Click here to add/edit favorite websites</a>
          </div>

          <div className="homePageWebsitesContainer">
          {this.state.userfavoritewebsites.map(userfavoritewebsite => (
                                <a className="homePageUserFavoriteWebsiteButton"
                                        key={userfavoritewebsite.name}
                                        href={'//' + userfavoritewebsite.url}
                                        target="_blank"
                                        rel="noopener noreferrer" 
                                        id={userfavoritewebsite._id}
                                        name={userfavoritewebsite.name}
                                        url={userfavoritewebsite.url}
                                        category={userfavoritewebsite.category}
                                        favorite={userfavoritewebsite.favorite}
                                        >{userfavoritewebsite.name}</a>
                                                                        ))}
</div>
           
          </Grid.Column>
          <footer className="footer">
    Copyright <i className="far fa-copyright"></i>
  </footer>
        </Grid>
 
        </div>
      </>
    );
  }
}

export default Home;

