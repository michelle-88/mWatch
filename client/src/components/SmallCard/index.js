import React from "react";
import "./style.css";

function SmallCard(props) {
    return (
        <div className="card mb-3 pt-2">
          <div className="card-body">
            <div className="row">
                <div className="col-12 col-lg-3 text-center ml-3">
                <h4 className="card-title"><strong>{props.name}</strong></h4>
                    <img src={props.poster ? `http://image.tmdb.org/t/p/original${props.poster}` : "http://www.salasardyechem.com/img/not-available.jpg"} alt="Show Poster"/>
                </div>
                <div className="col-12 col-lg-8 mt-4 pr-5">
                    <p className="text-black text-justify">{props.summary}</p>
                    {props.children}
                </div>
                <div className="col-12 col-lg-1 p-1"></div>
            </div>
            </div>
        </div>
    )
}

export default SmallCard;