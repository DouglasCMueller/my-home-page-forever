import React, { Component } from "react";
import Header from "../components/Header/index"
import EventsList from "../components/EventsList";

class EventList extends Component {
  
  render() {
    return (
    <>
   <Header />
   <EventsList />
   </>
 
    )
  }
}

export default EventList;
