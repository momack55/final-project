import axios from "axios";

export default {
  getRandomEvents: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};

// unirest.get("https://robby.p.rapidapi.com/search.json?country=US&lng=-74.00597&city=Nashville&lat=40.71435&to=2016-08-01T20%3A30%3A00%2B08%3A00&limit=30&distance=10&from=2016-06-30T20%3A30%3A00&key=1c458bd8a2mshfb32623a5835163p122f0djsnd58143511b27")
// .header("X-RapidAPI-Host", "robby.p.rapidapi.com")
// .header("X-RapidAPI-Key", "e867c260bfmsh6a1ef08e1f0cac1p12b797jsne7983cd8da2e")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });