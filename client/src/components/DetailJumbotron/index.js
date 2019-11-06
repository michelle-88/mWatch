import React from "react";
import "./style.css";

function DetailJumbotron(props) {
    return (
        <div className="jumbotron">
            <div className="text-center mb-4">
            <h2 className="h1-responsive">{props.title}</h2>
            <img src={props.poster} alt="Show Poster"/>
            </div>
            <p className="lead"><strong>Plot:</strong> {props.plot}</p>
            <p><strong>Starring:</strong> {props.actors}</p>
            <p><strong>Genre(s):</strong> {props.genre}</p>
            <p><strong>Rated:</strong> {props.rated}</p>
            <p><strong>First Aired:</strong> {props.released}</p>
            <p><strong>Written By:</strong> {props.writer}</p>
            <p><strong>IMDb Rating:</strong> {props.rating}/10</p>
            <h3>Where To Watch</h3>
            <p><strong>Streaming Service:</strong> {props.location}</p>
            <p><strong>Link to show:</strong> <a href={props.streamUrl}>Start Watching Now!</a></p>
        </div>
    );
}

export default DetailJumbotron;