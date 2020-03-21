import axios from "axios";

export default {

  getEvents: function() {
    // Gets all events
    return axios.get("/api/events");
  },
  // Deletes the saved event with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
   // Deletes an event to the database
   deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves an book to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  }
}
