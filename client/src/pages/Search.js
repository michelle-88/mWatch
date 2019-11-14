import React, { Component } from "react";
import TVAPI from "../utils/TVAPI";
import DBAPI from "../utils/DBAPI";
import SearchForm from "../components/SearchForm";
import SmallCard from "../components/SmallCard";
import Button from "../components/Button";
import Container from "../components/Container";
import {usernameTransfer} from "../components/Login";

const styles = {
    title: {
      fontFamily: 'Limelight'
    }
}

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
      document.querySelector(`[data-id="${id}"]`).setAttribute('disabled', 'true');
      document.querySelector(`[data-id="${id}"]`).innerHTML = '<i class="fas fa-check-circle fa-lg"></i>';
      DBAPI.saveShow(usernameTransfer, {
        id: id,
        name: name,
        poster: poster,
        summary: summary
      })
      .then(TVAPI.getImdbID(id))
      .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1 style={styles.title} className="text-danger text-center my-3">Search for Shows</h1>
                <SearchForm 
                    query={this.state.query}
                    handleInputChange={this.handleInputChange}
                    handleSearchSubmit={this.handleSearchSubmit}
                />
                <Container>
                <div className="card-columns mt-3">
                {this.state.shows.map(show => (
                    <SmallCard 
                        key={show.id}
                        id={show.id}
                        name={show.name}
                        poster={show.poster_path}
                        summary={show.overview}
                    >
                    <Button data-id={show.id} className="btn btn-success" onClick={() => this.saveShow(show.id, show.name, show.poster_path, show.overview)}>
                        <i className="fas fa-plus mr-2"></i>
                        Add to Watch List
                    </Button>
                    </SmallCard>
                ))}
                </div>
                </Container>
            </div>
        )
    }
}

export default Search;
