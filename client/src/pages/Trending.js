import React, { Component } from "react";
import TVAPI from "../utils/TVAPI";
import DBAPI from "../utils/DBAPI";
import SmallCard from "../components/SmallCard";
import GenreButton from "../components/GenreButton";
import PrivateNav from "../components/PrivateNav";


class Trending extends Component {
    state = {
        shows: [],
        genres: [
            {
              id: 28,
              name: "Action"
            },
            {
              id: 12,
              name: "Adventure"
            },
            {
              id: 16,
              name: "Animation"
            },
            {
              id: 35,
              name: "Comedy"
            },
            {
              id: 80,
              name: "Crime"
            },
            {
              id: 99,
              name: "Documentary"
            },
            {
              id: 18,
              name: "Drama"
            },
            {
              id: 10751,
              name: "Family"
            },
            {
              id: 14,
              name: "Fantasy"
            },
            {
              id: 36,
              name: "History"
            },
            {
              id: 27,
              name: "Horror"
            },
            {
              id: 10402,
              name: "Music"
            },
            {
              id: 9648,
              name: "Mystery"
            },
            {
              id: 10749,
              name: "Romance"
            },
            {
              id: 878,
              name: "Science Fiction"
            },
            {
              id: 10770,
              name: "TV Movie"
            },
            {
              id: 53,
              name: "Thriller"
            },
            {
              id: 10752,
              name: "War"
            },
            {
              id: 37,
              name: "Western"
            }
          ],
          username: ""
    }
    

    saveShow = (id, name, poster, summary) => {
        DBAPI.saveShow({
          id: id,
          name: name,
          poster: poster,
          summary: summary
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    componentDidMount(){
      console.log(this.props.match.params.username)
      this.setState({username: this.props.match.params.username})
        this.searchByGenre();
    }

    searchByGenre = id => {
        console.log("searching genre")
        TVAPI.trendingGenre(id)
            .then(res => {
                console.log(res.results)
                this.setState({ shows: res.results})
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <PrivateNav
                  username={this.state.username}
                />
                <h1>Trending Now</h1>
                {this.state.genres.map(genre=>(
                    <GenreButton
                        searchByGenre={this.searchByGenre}
                        key={genre.id}
                        id={genre.id}
                        name={genre.name}
                    />
                ))}
                {this.state.shows.map(show => (
                    <SmallCard 
                        key={show.id}
                        id={show.id}
                        name={show.name}
                        poster={show.poster_path}
                        summary={show.overview}
                        saveShow={this.saveShow}
                    />
                ))}
            </div>
        )
    }
}

export default Trending;
