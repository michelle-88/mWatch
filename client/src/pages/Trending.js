import React, { Component } from "react";
import TVAPI from "../utils/TVAPI";
import DBAPI from "../utils/DBAPI";
import SmallCard from "../components/SmallCard";

class Trending extends Component {
    state = {
        shows: []
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
        this.trendingShows()
    }

    // function that shows trending shows
    trendingShows = event => {
        TVAPI.trendingShows()
            .then(res => this.setState({ shows: res.results}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>Trending Now</h1>
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
