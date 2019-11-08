import React from "react";

function Container(props) {
    return (
        <div className="container-fluid">
            {props.children}
        </div>
    )
}

export default Container;