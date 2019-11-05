import React from "react";
import "./style.css"

function SearchForm(props) {
  return (
    <form className="search text-center container">
        <label htmlFor="showSearch">Search For a TV Show:</label>
        <input
          value={props.query}
          onChange={props.handleInputChange}
          name="showSearch"
          type="text"
          className="form-control search-input"
          placeholder="Search by Show Name"
        />

        <button type="submit" onClick={props.handleSearchSubmit} className="btn btn-white text-dark search-btn">
          Search
        </button>
    </form>
  );
}

export default SearchForm;
