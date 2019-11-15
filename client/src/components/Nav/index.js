import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import Auth from "../../utils/Auth";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white text-dark">
      <span className="text-left mr-5 pr-5">
          <span className="navbar-brand text-danger"><strong><span className="logo-1">MW</span>atch<span className="logo-2"></span></strong></span>
      </span>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link float-right" to="/trending">
          <i class="fas fa-chart-line mr-1"></i>
            Trending
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link float-right" to="/watchlist">
          <i class="far fa-list-alt mr-1"></i>
            Watch List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link float-right" to="/search">
          <i class="fas fa-search mr-1"></i>
            Search
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav nav-flex-icons">
        <li className="nav-item">
          <a onClick={() => {Auth.signout()}} className="nav-link text-danger" href="/">
          <i class="fas fa-sign-out-alt mr-1"></i>
            Logout 
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
