import React, { Component } from "react";
import DBAPI from "../utils/DBAPI";
import DetailJumbotron from "../components/DetailJumbotron";
import {detailsId} from "../pages/WatchList";

class DetailsPage extends Component {
    state = {
        details: []
    }

    componentDidMount() {
        DBAPI.getFromPeanutGallery(detailsId)
          .then(res => this.setState({details: [res.data]}))
          .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.details.map(detail => (
                    <DetailJumbotron
                    title={detail.title}
                    poster={detail.posterURL}
                    plot={detail.plot}
                    actors={detail.actors}
                    genre={detail.genre}
                    rated={detail.rated}
                    released={detail.released}
                    writer={detail.writer}
                    rating={detail.rating}
                    location={detail.whereToWatch[0].locationName}
                    streamUrl={detail.whereToWatch[0].streamingUrl}
                    >
                    </DetailJumbotron>  
                ))}
            </div>
        )   
    }
}

export default DetailsPage;