import React from "react";

function BtnContainer(props) {
    return (
        <div className="container-fluid text-center">
            {props.children}
        </div>
    )
}

export default BtnContainer;