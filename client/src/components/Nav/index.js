import React from "react";
import "./style.css";
import {
	BrowserRouter as Router,
	Route,
	Link,
  Redirect,
  Switch,
	withRouter
} from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white text-dark">
      <span className="text-left mr-5 pr-5">
        <a className="navbar-brand text-danger" href="/">
          <span className="logo-1">MW</span>atch<span className="logo-2"></span>
        </a>
      </span>
      <span className="ml-5 pl-5">
        <Link className="navbar-brand text-dark float-right" to="/trending">
          Trending
        </Link>
        <Link className="navbar-brand text-dark float-right" to="/watchlist">
          Watch List
        </Link>
        <Link className="navbar-brand text-dark float-right" to="/search">
          Search
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
