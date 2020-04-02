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
  componentDidUpdate(){
    this.loadUserEvents();
}
  loadUserEvents = () => {
    API.getUserById(userId)
      .then(res => {
        console.log(res)
        this.setState({
          events: res.data.event,
       
        })
      })
      .catch(err => console.log(err));
  };

// handle any changes to the input fields
handleInputChange = event => {
  // Pull the name and value properties off of the event.target (the element which triggered the event)
  const { name, value } = event.target;

  // Set the state for the appropriate input field
  this.setState({
    [name]: value
  });
};

// When the form is submitted, prevent the default event and alert the username and password
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
     console.log(res)
   },()=> {
    this.loadUserEvents();
    
})
  this.setState({ date: "", time: "", title: "", note: ""});

};


  render() {
    return (
      <>
        <Grid>
          <Grid.Column width={10}>
            <div className="eventPageEventsContainer">
              <div className="eventPageEventsTitle"><i class="fab fa-elementor"></i> Events List
          </div>
              <div className="eventPageIndividualEventsContainer">
                {this.state.events.map(event => (

                  <div className="eventsListShownContainer" key={event.title}>
                    <p className="eventListEachContainer"><strong>Date:     </strong>{event.date}</p>
                    <p className="eventListEachContainer"><strong>Time:     </strong>{event.time}</p>
                    <p className="eventListEachContainer"><strong>Title:     </strong>{event.title}</p>
                    <p className="eventListEachContainer"><strong>Note:     </strong>{event.note}</p>
            
                    <button className="eventListContainerDeleteButton">Delete</button>
                  </div>

                ))}
              </div>
            </div>

            <div>

            </div>
          </Grid.Column>
          
          <Grid.Column width={6}>
            <div className="newEventTitle"><i class="fab fa-elementor"></i>    New Event</div>
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
          <footer class="page-footer font-small blue fixed-bottom">
    <h5 >Copyright <i class="far fa-copyright"></i></h5> 
  </footer>
        </Grid>

      </>
    )
  }
}

export default EventsList;