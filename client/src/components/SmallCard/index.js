import React from "react";
import "./style.css";

function SmallCard(props) {
    return (
        <div className="card mb-3 pt-2">
          <div className="card-body">
              <div className="row justify-content-center">
              <h4 className="card-title pb-1"><strong>{props.name}</strong></h4>
              </div>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <img className="trend-img pr-2" src={props.poster ? `http://image.tmdb.org/t/p/original${props.poster}` : "http://www.salasardyechem.com/img/not-available.jpg"} alt="Show Poster"/>
                </div>
                <div className="col-12 col-lg-8 pl-5">
                    <p className="text-black summary">{props.summary}</p>
                    {props.children}
                </div>
            </div>
            </div>
        </div>
    )
}

export default SmallCard;