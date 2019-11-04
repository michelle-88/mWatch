// require("dotenv").config();
const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb('0faa87ddbbef0c9919c7bc4cce783c37')

export default {
  // Gets TV show search results
  searchShows: function(query) {
    return moviedb.searchTv({ query: query }).catch(console.error)
  },
  // Gets Trending TV shows
  trendingShows: function(){
    return moviedb.miscPopularTvs({}).catch(console.error)
  }
  // Gets All Genres
  genreList: function(){
    return moviedb.genreTvList({}).catch(console.error);
  }

};
