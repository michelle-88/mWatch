import axios from "axios";

export default {
    // Save show to db
    saveShow: function(showData) {
      return axios.post("/api/users/watchlist", showData).then(console.log(showData));
    },
    // Get user's Watch List from db
    getWatchList: function(username) {
        return axios.get("/api/users/" + username);
    },
    // Delete a show from user's Watch List
    deleteShow: function(id) {
        return axios.delete("/api/users/watchlist/" + id);
    }

};