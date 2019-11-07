import React, { Component } from "react";
import DBAPI from "../utils/DBAPI";
import DetailJumbotron from "../components/DetailJumbotron";
import { detailsId } from "../pages/WatchList";

class DetailsPage extends Component {
    state = {
        details: []
    }

    componentDidMount() {
        DBAPI.getFromPeanutGallery(detailsId)
            .then(res => this.setState({ details: [res.data] }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.details.map(detail => (
                    <DetailJumbotron
                        key={detail.posterURL}
                        title={detail.title}
                        poster={detail.posterURL}
                        plot={detail.plot}
                        actors={detail.actors}
                        genre={detail.genre}
                        rated={detail.rated}
                        released={detail.released}
                        writer={detail.writer}
                        rating={detail.rating}
                    >
                        {!detail.whereToWatch.length ? (<p>No streaming information available... Please check back later!</p>)
                            : (<div><p><strong>Streaming Service:</strong> {detail.whereToWatch[0].locationName}</p>
                                <p><strong>Link to show:</strong> <a href={detail.whereToWatch[0].streamingUrl} target='_blank'>Start Watching Now!</a></p></div>)}
                    </DetailJumbotron>
                ))}
            </div>
        )
    }
}

export default DetailsPage;