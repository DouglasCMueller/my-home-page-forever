import axios from "axios";

export default {
// axios routes for Events
  getEvents: function() {
    // Gets all events
    return axios.get("/api/events");
  },
  // gets event with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
   // Deletes an event to the database
   deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves an event to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },

  // axios routes for Users

  getUsers: function() {
    // Gets all users
        return axios.get("/api/users");
  },
  // gets user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // gets user by email
  getUserByEmail:  function(email) {
    return axios.post("/api/users/login", email);
  },
  // Deletes a user to the database
   deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Updates a user to the database
  updateUser: function(id) {
    return axios.put("/api/users/", id);
  },


// axios routes for Websites

  getWebsites: function() {
    // Gets all events
    return axios.get("/api/websites");
  },
  // gets event with the given id
  getWebsite: function(id) {
    return axios.get("/api/websites/" + id);
  },
   // Deletes an event to the database
   deleteWebsite: function(id) {
    return axios.delete("/api/websites/" + id);
  },
  // Saves an event to the database
  saveWebsite: function(eventData) {
    return axios.post("/api/websites", eventData);
  },


}
