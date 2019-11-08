import React from "react";

function GenreButton(props) {
  return (
    <button 
    onClick={()=>{ 
      console.log(props.id)
      props.searchByGenre(props.id)}}
    className="genre-btn btn btn-white text-dark" data-id={props.id} tabIndex="0">
      {props.name}
    </button>
  );
}

export default GenreButton;