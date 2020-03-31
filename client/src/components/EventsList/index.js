import React, { Component } from "react";
import API from "../../utils/API";
import { Grid, } from 'semantic-ui-react'
import './style.css'

console.log(window.localStorage.getItem("id"))
let userId = window.localStorage.getItem("id")

class EventsList extends Component {

  state = {
    fname: "",
    events: [],

  };

  componentDidMount() {
    this.loadUserEvents();
  }

  loadUserEvents = () => {
    API.getUserById(userId)
      .then(res => {
        console.log(res)
        this.setState({
          events: res.data.event,
          fname: res.data.fname
        })
      })
      .catch(err => console.log(err));
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
                    <button className="eventListContainerEditButton"  >Edit</button>
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
              <input className="newEventDateInput" id="newEventDateInputId" type="text" placeholder="01/01/2020"></input>
              <div className="newEventDataTitle">Time:</div>
              <input className="newEventTimeInput" id="newEventTimeInputId" type="text" placeholder="12 pm"></input>
              <div className="newEventDataTitle">Title:</div>
              <input className="newEventTitleInput" id="newEventTitleInputId" type="text" ></input>
              <div className="newEventDataTitle">Note:</div>
              <textarea className="newEventNoteInput" id="newEventNoteTextAreaId" ></textarea>

            <div>
              <button className="newEventSubmitButton">Submit</button>
            </div>

            </div>
          </Grid.Column>

        </Grid>

      </>
    )
  }
}

export default EventsList;