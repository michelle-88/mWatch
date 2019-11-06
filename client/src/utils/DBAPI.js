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
    // Save new show in Peanut Gallery with details from IMDb API
    addToPeanutGallery: function(showData) {
        return axios.post("/api/users/peanutgallery", showData);
    },
    // Get details about a show in the Peanut Gallery
    getFromPeanutGallery: function(id) {
        return axios.get("/api/users/peanutgallery/" + id);
    },
    // Update Peanut Gallery document with 'Where To Watch' info
    updatePeanutGallery: function(id, watchData) {
        return axios.put("/api/users/peanutgallery/" + id, watchData);
    }
};