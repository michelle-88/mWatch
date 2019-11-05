import React, { Component } from "react";
import TVAPI from "../utils/TVAPI";
import DBAPI from "../utils/DBAPI";
import SearchForm from "../components/SearchForm";
import SmallCard from "../components/SmallCard";
import Button from "../components/Button";
import PrivateNav from "../components/PrivateNav";
import {Login, usernameTransfer} from "../components/Login";

class Search extends Component {
    state = {
        query: "",
        shows: []
    };

    handleInputChange = event => {
        this.setState({ query: event.target.value });
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        TVAPI.searchShows(this.state.query)
            .then(res => this.setState({ shows: res.results, query: "" }))
            .catch(err => console.log(err));
    };

    saveShow = (id, name, poster, summary) => {
      DBAPI.saveShow(usernameTransfer, {
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
                <PrivateNav/>
                <SearchForm 
                    query={this.state.query}
                    handleInputChange={this.handleInputChange}
                    handleSearchSubmit={this.handleSearchSubmit}
                />
                {this.state.shows.map(show => (
                    <SmallCard 
                        key={show.id}
                        id={show.id}
                        name={show.name}
                        poster={show.poster_path}
                        summary={show.overview}
                    >
                    <Button className="btn btn-success" onClick={() => this.saveShow(show.id, show.name, show.poster_path, show.overview)}>
                        Add to Watch List
                    </Button>
                    </SmallCard>
                ))}
            </div>
        )
    }
}

export default Search;
