import React, { Component } from "react";
import TVAPI from "../utils/TVAPI";
import SearchForm from "../components/SearchForm";
import SmallCard from "../components/SmallCard";

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
            .then(res => this.setState({ shows: res.data.results, query: "" }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <SearchForm 
                    query={this.state.query}
                    handleInputChange={this.handleInputChange}
                    handleSearchSubmit={this.handleSearchSubmit}
                />
                {this.state.shows.map(show => (
                    <SmallCard 
                        key={show.id}
                        name={show.name}
                        poster={show.poster_path}
                        summary={show.overview}
                    />
                ))}
            </div>
        )
    }
}

export default Search;
