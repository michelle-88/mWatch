import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function GenreButton(props) {
  return (
    <button 
    onClick={()=>props.searchByGenre(props.id)}
    className="genre-btn btn btn-white text-dark" data-id={props.id} role="button" tabIndex="0">
      {props.name}
    </button>
  );
}

export default GenreButton;