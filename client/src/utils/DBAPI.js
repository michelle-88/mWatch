import axios from "axios";

export default {
    // Save show to db
    saveShow: function(username, showData) {
      return axios.post("/api/users/watchlist/" + username, showData).then(console.log(showData));
    },
    // Get user's Watch List from db
    getWatchList: function(username) {
        return axios.get("/api/users/watchlist/" + username);
    },
    // Delete a show from user's Watch List
    deleteShow: function(username, id) {
        return axios.delete("/api/users/watchlist/" + username + "/" + id);
    },
    // Save new show in Peanut Gallery with details
    addToPeanutGallery: function(showData) {
        return axios.post("/api/users/peanutgallery", showData);
    }

};