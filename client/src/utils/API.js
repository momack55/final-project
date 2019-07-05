import axios from "axios";

export default {
  //get events from api
  getEvents: function(){
    return axios.get("https://cors-anywhere.herokuapp.com/"+"http://api.eventful.com/json/events/search?app_key=9NB8Mpkx7sf2kfZs&l=Nashville&t=This+Weekend");
  },
  //get events that have been saved to db 
  getSavedEvents: function () {
    return axios.get("/api/events/");
  }, 
  //delete saved event with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  //saves an event to the db
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  }
};