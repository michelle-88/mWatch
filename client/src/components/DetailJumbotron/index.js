import React from "react";
import "./style.css";

function DetailJumbotron(props) {
    return (
        <div className="jumbotron mt-3 pt-3 mb-n5">
            <div className="row">
                <div className="col-12 col-lg-4 text-center mt-3">
                    <h2 className="h2 mb-3">{props.title}</h2>
                    <img src={props.poster} alt="Show Poster"/>
                </div>
            <div className="col-12 col-lg-8 mt-5 pt-3">
                <p><strong>Plot:</strong> {props.plot}</p>
                <p><strong>Starring:</strong> {props.actors}</p>
                <p><strong>Genre(s):</strong> {props.genre}</p>
                <p><strong>Rated:</strong> {props.rated}</p>
                <p><strong>First Aired:</strong> {props.released}</p>
                <p><strong>Written By:</strong> {props.writer}</p>
                <p><strong>IMDb Rating:</strong> {props.rating}/10</p>
                </div>
            </div>
                
            {props.children}
           
        </div>
    );
}

export default DetailJumbotron;