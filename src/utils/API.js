import axios from "axios";

export default {
  // get event from api 
  getEvents: function() {
    return axios.get("https://robby.p.rapidapi.com/search.json");
  }, 
  // save event to db
  saveEvent: function() {
    return axios.post("/api/books", eventData);
  },
  //get all saved event from db
  getSavedEvent: function() {
    return axios.post("/api/events");
  },
  //delete selected event from db
  deleteBook: function() {
    return axios.delete("/api/events/" + id);
  }
};

//here is the url to the api page
//https://rapidapi.com/Robby_Assistant/api/events-2

// unirest.get("https://robby.p.rapidapi.com/search.json?country=US&lng=-74.00597&city=Nashville&lat=40.71435&to=2016-08-01T20%3A30%3A00%2B08%3A00&limit=30&distance=10&from=2016-06-30T20%3A30%3A00&key=1c458bd8a2mshfb32623a5835163p122f0djsnd58143511b27")
// .header("X-RapidAPI-Host", "robby.p.rapidapi.com")
// .header("X-RapidAPI-Key", "e867c260bfmsh6a1ef08e1f0cac1p12b797jsne7983cd8da2e")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });