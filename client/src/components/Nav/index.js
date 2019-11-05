import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white text-dark">
      <span className="text-left mr-5 pr-5">
        <a className="navbar-brand text-danger" href="/">
          <span className="logo-1">MW</span>atch<span className="logo-2"></span>
        </a>
      </span>
      <span className="ml-5 pl-5">
        <a className="navbar-brand text-dark float-right" href="/trending">
          Trending
        </a>
        <a className="navbar-brand text-dark float-right" href="/watchlist">
          Watch List
        </a>
        <a className="navbar-brand text-dark float-right" href="/search">
          Search
        </a>
      </span>
    </nav>
  );
}

export default Nav;
