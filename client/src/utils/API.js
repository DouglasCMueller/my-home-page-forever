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
  getUserById: function(id) {
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
  // Updates a website to user 
  updateUserWebsite: function(id, userdata) {
    return axios.put("/api/users/" + id, userdata);
  },
  
  deleteUserWebsite: function(id, userdata) {
    return axios.post("/api/users/website/" + id, userdata);
  },


   // Updates a todo to user
   addUserTodo: function(id, userdata) {
    return axios.put("/api/users/todo/" + id, userdata);
  },
   // Deletes a todo to user
   deleteUserTodo: function(id, userdata) {
    return axios.post("/api/users/todo/" + id, userdata);
  },
 // Updates an event to user
 addUserEvent: function(id, userdata) {
  return axios.put("/api/users/event/" + id, userdata);
},
 // Deletes a todo to user
 deleteUserEvent: function(id, userdata) {
  return axios.post("/api/users/event/" + id, userdata);
},

// axios routes for todos

getTodos: function() {
  // Gets all todos
  return axios.get("/api/todos");
},
// gets todo with the given id
getTodo: function(id) {
  return axios.get("/api/todos/" + id);
},
 // Deletes an event to the database
 deleteTodo: function(id) {
  return axios.delete("/api/todos/" + id);
},
// Saves an event to the database
saveTodo: function(eventData) {
  return axios.post("/api/todos", eventData);
},

// axios routes for Websites

  getWebsites: function() {
    // Gets all websites
    return axios.get("/api/websites");
  },
  // gets website with the given id
  getWebsiteById: function(id) {
    return axios.get("/api/websites/" + id);
  },
  // gets website with the given url
  getWebsiteByName: function(name) {
    return axios.get("/api/websites/" + name);
  },
   // Deletes a website to the database
   deleteWebsite: function(id) {
    return axios.delete("/api/websites/" + id);
  },
  // Saves a website to the database
  saveWebsite: function(eventData) {
    return axios.post("/api/websites", eventData);
  },


}
