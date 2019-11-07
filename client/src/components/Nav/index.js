import React from "react";
import "./style.css";
import {
	BrowserRouter as Router,
	Link
} from 'react-router-dom';
import Auth from "../../utils/Auth";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white text-dark">
      <span className="text-left mr-5 pr-5">
          <p className="navbar-brand text-danger"><strong><span className="logo-1">MW</span>atch<span className="logo-2"></span></strong></p>
      </span>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link text-dark float-right" to="/trending">
            Trending
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark float-right" to="/watchlist">
            Watch List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark float-right" to="/search">
            Search
          </Link>
        </li>
      </ul>
      {/* <span className="ml-5 pl-5">
      </span> */}
      <ul className="navbar-nav nav-flex-icons">
        <li className="nav-item">
          <a onClick={() => {Auth.signout()}} className="nav-link text-danger" href="/">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
