import axios from "axios";

export default {
  // Gets books from the Google API
  // getEvents: function(q) {
  //   return axios.get("/api/google", { params: { q: "title:" + q } });
  // },
  // Gets all saved books
  getSavedEvents: function() {
    return axios.get("/api/events");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves an book to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  }
};
