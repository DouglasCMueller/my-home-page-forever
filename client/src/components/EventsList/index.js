import React, { Component } from "react";
import API from "../../utils/API";
import { Grid, } from 'semantic-ui-react'
import './style.css'

let userId = window.localStorage.getItem("id")

class EventsList extends Component {

  state = {
    date: "",
    time:"",
    title:"",
    note:'',
    events: [],

  };

  componentDidMount() {
    this.loadUserEvents();
  }

  loadUserEvents = () => {
    API.getUserById(userId)
      .then(res => {
     console.log("sent")
        this.setState({
          events: res.data.event,
             
        })
      })
      .catch(err => console.log(err));
  };

handleInputChange = event => {
   const { name, value } = event.target;

 this.setState({
    [name]: value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
 const savedEvent = {
   date: this.state.date,
   time: this.state.time,
   title: this.state.title,
   note: this.state.note
}

console.log(savedEvent)
  API.addUserEvent(userId, savedEvent)
   .then (res=>{
     console.log("event saved")
     window.location= '/events/'
   },)  

  this.setState({ date: "", time: "", title: "", note: ""});
};

deleteEvent = (date, time, title, note) =>{

  console.log("event delete clicked")
  
  let deletedEvent ={
    date: date,
    time: time,
    title: title,
    note: note
  }
  console.log(deletedEvent)
  API.deleteUserEvent(userId, deletedEvent)
  .then (res=>{
    console.log("deleted event")
     window.location= '/events/'
  },)
  this.setState({ date: "", time: "", title: "", note: ""});
  }

  render() {
    return (
      <>
        <Grid>
          <Grid.Column width={10}>
            <div className="eventPageEventsContainer">
              <div className="eventPageEventsTitle"><i className="fab fa-elementor"></i> Events List
          </div>
              <div className="eventPageIndividualEventsContainer">
                {this.state.events.map(event => (

                  <div className="eventsListShownContainer" key={event.title}>
                    <p className="eventListEachContainer"
                    name="date"
                    value={this.state.date}
                    ><strong>Date:     </strong>{event.date}</p>
                    <p className="eventListEachContainer"
                    name="time"
                    value={this.state.time}
                    ><strong>Time:     </strong>{event.time}</p>
                    <p className="eventListEachContainer"
                    name="title"
                    value={this.state.title}
                    ><strong>Title:     </strong>{event.title}</p>
                    <p className="eventListEachContainer"
                    name="note"
                    value={this.state.note}
                    ><strong>Note:     </strong>{event.note}</p>
            
                    <button className="eventListContainerDeleteButton"
                    onClick={() => this.deleteEvent(event.date, event.time, event.title, event.note)}
                    >Delete</button>
                  </div>

                ))}
              </div>
            </div>

            <div>

            </div>
          </Grid.Column>
          
          <Grid.Column width={6}>
            <div className="newEventTitle"><i className="fab fa-elementor"></i>    New Event</div>
            <div className="newEventContainer">
              <div className="newEventDataTitle">Date:</div>
              <input className="newEventDateInput" id="newEventDateInputId"

               type="text"
               placeholder="01/01/2020"
               name="date"
               value={this.state.date}
               onChange={this.handleInputChange}

               ></input>
              <div className="newEventDataTitle">Time:</div>
              <input className="newEventTimeInput" id="newEventTimeInputId"

               type="text"
               placeholder="12 pm"
               name="time"
               value={this.state.time}
               onChange={this.handleInputChange}
               
               ></input>
              <div className="newEventDataTitle">Title:</div>
              <input className="newEventTitleInput" id="newEventTitleInputId"

               type="text"
               placeholder=""
               name="title"
               value={this.state.title}
               onChange={this.handleInputChange}
               
               ></input>
              <div className="newEventDataTitle">Note:</div>
              <textarea className="newEventNoteInput" id="newEventNoteTextAreaId"
              type="text"
              placeholder=""
              name="note"
              value={this.state.note}
              onChange={this.handleInputChange}
              
              ></textarea>

            <div className="newEventNoteSubmitButtonContainer">
              <button className="newEventSubmitButton" onClick={this.handleFormSubmit}>Submit</button>
            </div>

            </div>
          </Grid.Column>
          <footer className="footer">
    Copyright <i className="far fa-copyright"></i>
  </footer>
        </Grid>

      </>
    )
  }
}

export default EventsList;