import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function GenreButton(props) {
  return (
    <span className="genre-btn" data-id={props.id} role="button" tabIndex="0">
      {props.name}
    </span>
  );
}

export default GenreButton;