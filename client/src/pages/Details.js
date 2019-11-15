import React, { Component } from "react";
import DBAPI from "../utils/DBAPI";
import DetailJumbotron from "../components/DetailJumbotron";
import { detailsId } from "../pages/WatchList";
import {usernameTransfer} from "../components/Login";
import CommentForm from "../components/CommentForm";
import CommentDiv from "../components/CommentDiv";

class DetailsPage extends Component {
    state = {
        details: [],
        comment: "",
        updated: false,
        dataFound: true
    }

    handleInputChange = event => {
        this.setState({ comment: event.target.value });
    };

    addComment = event => {
        event.preventDefault();
        DBAPI.addComment(detailsId, {
            body: this.state.comment,
            user: usernameTransfer
        })
        .then(res => this.setState({ comment: "", updated: true}))
        .catch(err => console.log(err));
    };

    componentDidMount() {
        DBAPI.getFromPeanutGallery(detailsId)
            .then(res => {
                if(res.data === null){
                    this.setState({dataFound: false})
                }
                this.setState({ details: [res.data] })
            })
            .catch(err => console.log(err));
    };

    componentDidUpdate() {
        if(this.state.updated === true) {
            DBAPI.getFromPeanutGallery(detailsId)
            .then(res => this.setState({ details: [res.data], updated: false }))
            .catch(err => console.log(err))
        }
        else {
            return false;
        }
    };

    render() {
        if(!this.state.dataFound){
            return(
                <div>
                    <h1 className="text-white text-center">No show information available at this time</h1>
                </div>
            )
        } else {


        return (
            <div className="container">
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
                            <p><a className="btn btn-outline-danger p-2" href={detail.whereToWatch[0].streamingUrl} target='_blank'>Start Watching Now!</a></p></div>)}
                    <h3 className="mt-5 mb-3">User Comments</h3>
                    {!detail.comments.length ? (<p>No comments for this show yet!</p>) 
                    : (<CommentDiv comments={detail.comments}/>)}
                    </DetailJumbotron>

                ))}
                    <CommentForm
                        comment={this.state.comment}
                        handleInputChange={this.handleInputChange}
                        addComment={this.addComment}
                    />
            </div>
        )
    }
    }
}

export default DetailsPage;