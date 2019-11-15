import React from "react";

function BtnContainer(props) {
    return (
        <div>
            <div className="text-center pt-4">
                <button className="btn btn-white text-dark" data-toggle="collapse" data-target="#collapseExample"
                    aria-expanded="false" aria-controls="collapseExample">
                    Select a Genre
                </button>
            </div>
            <div className="collapse" id="collapseExample">
                <div className="mt-3 text-center">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default BtnContainer;