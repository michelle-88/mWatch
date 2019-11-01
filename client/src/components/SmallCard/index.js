import React from "react";
import "./style.css";

function SmallCard(props) {
    return (
        <div className="card mb-3">
          <div className="card-body">
            <h4 className="card-title"><strong>{props.name}</strong></h4>
            <div className="row">
                <div className="col-12 col-lg-3 text-center">
                    <img src={props.poster ? `http://image.tmdb.org/t/p/original${props.poster}` : "http://www.salasardyechem.com/img/not-available.jpg"} alt="Show Poster"/>
                </div>
                <div className="col-12 col-lg-9">
                    <p className="card-text">{props.summary}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SmallCard;