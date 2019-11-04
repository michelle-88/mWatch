import React from "react";

function SearchForm(props) {
  return (
    <form className="search text-center">
        <label htmlFor="showSearch">Search For a TV Show:</label>
        <input
          value={props.query}
          onChange={props.handleInputChange}
          name="showSearch"
          type="text"
          className="form-control"
          placeholder="Search by Show Name"
        />

        <button type="submit" onClick={props.handleSearchSubmit} className="btn btn-secondary">
          Search
        </button>
    </form>
  );
}

export default SearchForm;
