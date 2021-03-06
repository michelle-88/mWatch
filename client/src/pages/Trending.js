import React, { Component } from "react";
import TVAPI from "../utils/TVAPI";
import DBAPI from "../utils/DBAPI";
import Button from "../components/Button";
import SmallCard from "../components/SmallCard";
import GenreButton from "../components/GenreButton";
import BtnContainer from "../components/BtnContainer";
import Container from "../components/Container";
import {usernameTransfer} from "../components/Login";

const styles = {
  title: {
    fontFamily: 'Limelight'
  }
}

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

    componentDidMount(){
      this.setState({username: this.props.match.params.username})
      this.searchByGenre();
    }

    searchByGenre = id => {
        TVAPI.trendingGenre(id)
            .then(res => {
                this.setState({ shows: res.results})
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
              <BtnContainer>
                {this.state.genres.map(genre=>(
                    <GenreButton
                        searchByGenre={this.searchByGenre}
                        key={genre.id}
                        id={genre.id}
                        name={genre.name}
                    />
                ))}
                </BtnContainer>
                <h1 style={styles.title} className="text-danger text-center my-3">Trending Shows</h1>
                <Container>
                <div className="card-columns">
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

export default Trending;
