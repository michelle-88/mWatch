import DBAPI from "../utils/DBAPI";
const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb("0faa87ddbbef0c9919c7bc4cce783c37");
const axios = require('axios');

export default {
  // Gets TV show search results
  searchShows: function(query) {
    return moviedb.searchTv({ query: query }).catch(console.error);
  },
  // Gets Trending TV shows by genre
  trendingGenre: function(genre) {
    return moviedb.discoverTv({with_genres: genre, page: 1 }).catch(console.error);
  },
  // Gets IMDb id for a specific show so API call can be made to IMDb API
  getImdbID: function(id) {
    return moviedb.tvExternalIds({ id: id })
      .then(res => this.getImdbInfo(res.imdb_id, res.id))
      .catch(console.error);
  },
  // Get detailed info from IMDb about particular show
  getImdbInfo: function(imdbId, tmdbId) {
    return axios({
      "method":"GET",
      "url":"https://movie-database-imdb-alternative.p.rapidapi.com/",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": "a2f015a678msh2a0ce21581b9776p142941jsn5041963e7f65"
      },"params":{
      "i": imdbId,
      "r":"json"
      }
      })
      .then(res => DBAPI.addToPeanutGallery({
        imdbID: res.data.imdbID,
        tmdbId: tmdbId,
        title: res.data.Title,
        posterURL: res.data.Poster,
        plot: res.data.Plot,
        actors: res.data.Actors,
        genre: res.data.Genre,
        rated: res.data.Rated,
        released: res.data.Released,
        writer: res.data.Writer,
        rating: res.data.imdbRating
      }))
      .catch((error)=>{
        console.log(error)
      })
  }
};
