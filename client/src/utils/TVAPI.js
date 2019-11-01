import axios from "axios";
// require("dotenv").config();

export default {
  // Gets TV show search results
  searchShows: function(query) {
    return axios.get("https://api.themoviedb.org/3/search/tv?api_key=0faa87ddbbef0c9919c7bc4cce783c37&language=en-US&query=" + query);
  },

};
