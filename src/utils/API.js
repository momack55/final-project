import axios from "axios";

export default {
  getEvents: function(){
    return axios.get("https://cors-anywhere.herokuapp.com/"+"http://api.eventful.com/json/events/search?app_key=9NB8Mpkx7sf2kfZs&l=Nashville&t=This+Weekend");
  }
}


