import React, { Component } from "react";
import TVAPI from "../utils/TVAPI";
import DBAPI from "../utils/DBAPI";
import SmallCard from "../components/SmallCard";

class Trending extends component {
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

    render() {
        return (
            <div>
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
