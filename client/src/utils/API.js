import axios from "axios";

export default {
  //get events from api
  getEvents: function(){
    return axios.get("https://cors-anywhere.herokuapp.com/"+"http://api.eventful.com/json/events/search?app_key=9NB8Mpkx7sf2kfZs&l=Nashville&t=This+Weekend");
  },
  //get event by id 
  getEvent: function (id) {
    return axios.get("/api/events/" + id);
  }, 
  //delete event with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  //daves an event to the db
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  }
};


