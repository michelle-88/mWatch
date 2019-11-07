import DBAPI from "../utils/DBAPI";
const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb(process.env.REACT_APP_MOVIE_API_KEY);
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
  getImdbID: function(tmdbId) {
     moviedb.tvExternalIds({ id: tmdbId })
      .then(res => this.getImdbInfo(res.imdb_id, tmdbId))
      .catch(console.error);
  },
  // Get detailed info from IMDb about particular show
  getImdbInfo: function(imdbId, tmdbId) {
    axios({
      "method":"GET",
      "url":"https://movie-database-imdb-alternative.p.rapidapi.com/",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
      },"params":{
      "i": imdbId,
      "r":"json"
      }
      })
      .then(res => DBAPI.addToPeanutGallery({
        imdbId: imdbId,
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
      .then(res => this.getUtellyInfo(imdbId, res.data.title))
      .catch((error)=>{
        console.log(error)
      })
  },
  // Get 'Where To Watch' info from Utelly API
  getUtellyInfo: function(id, show) {
    axios({
      "method":"GET",
      "url":"https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
      },"params":{
      "term": show,
      "country":"us"
      }
      })
      .then(res => DBAPI.updatePeanutGallery(id, {
        locationName: res.data.results[0].locations[0].display_name,
        streamingUrl: res.data.results[0].locations[0].url,
        icon: res.data.results[0].locations[0].icon
      }))
      .catch((error)=>{
        console.log(error)
      })
  }
};
