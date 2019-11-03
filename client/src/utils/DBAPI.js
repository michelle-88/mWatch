const axios = require('axios');

export default {
    // Save show to db
    saveShow: function(showData) {
      return axios.post("/api/users/watchlist", showData).then(console.log(showData));
    },
};