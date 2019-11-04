import React, { Component } from "react";
import TVAPI from "../utils/TVAPI";
import DetailJumbotron from "../components/DetailJumbotron";

class DetailsPage extends Component {
    state = {
        details: []
    }

    componentDidMount() {
        TVAPI.getImdbID(this.props.match.params.id)
          .then(res => TVAPI.getImdbInfo(res.imdb_id))
          .then(res => this.setState({ details: [res.data] }))
          .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.details.map(detail => (
                    <DetailJumbotron
                    title={detail.Title}
                    poster={detail.Poster}
                    plot={detail.Plot}
                    actors={detail.Actors}
                    genre={detail.Genre}
                    rated={detail.Rated}
                    released={detail.Released}
                    writer={detail.Writer}
                    rating={detail.imdbRating}
                    >
                    </DetailJumbotron>  
                ))}
            </div>
        )   
    }
}

export default DetailsPage;