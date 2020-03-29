import React, { Component } from "react";
import API from "../../utils/API";
import ModalEvent from '../ModalEvent/'
import { Grid, } from 'semantic-ui-react'
import './style.css'

console.log(window.localStorage.getItem("id"))
let id = window.localStorage.getItem("id")


class EventsList extends Component {

  state = {
    fname: "",
    events: [],
   
  };

  componentDidMount() {

    
    this.loadUserEvents();


  }

  loadUserEvents = () => {
    API.getUser(id)
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
        <Grid.Column width={12}>
        <div className="eventPageEventsContainer">
          <div className="eventPageEventsTitle"><i class="fab fa-elementor"></i> Events List
  

          </div>
        
      <div className="eventPageIndividualEventsContainer">
          {this.state.events.map(event => (
            
            <div className="eventsListShownContainer">
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
<Grid.Column width={4}>
<div className="newEventModalTitle">New Event</div>
             <div className="newEventModalContainer">
                 <div
                 
                  className="newEventModalDataTitle">Date:</div>
       <input className="newEventModalDateInput" id="newEventModalDateInputId" type="text" placeholder="01012020"></input>
       <div className="newEventModalDataTitle">Time:</div>
       <input className="newEventModalTimeInput" id="newEventModalTimeInputId" type="text" placeholder="12 pm"></input>
       <div className="newEventModalDataTitle">Title:</div>
       <input className="newEventModalTitleInput" id="newEventModalTitleInputId" type="text" ></input>
       <div className="newEventModalDataTitle">Note:</div>
       <input className="newEventModalNoteInput" id="newEventModalNoteInputId" type="textarea" ></input>

             </div>
             <div>
                 <button className="newEventModalSubmitButton">Submit</button>
             </div>
            
                        </Grid.Column>

</Grid>


        
      </>
    )
  }
}

export default EventsList;