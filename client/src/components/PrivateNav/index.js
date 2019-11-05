import React from "react";
import Auth from "../../utils/Auth";
import {
	BrowserRouter as Router,
	Route,
	Link,
  Redirect,
  Switch,
	withRouter
} from 'react-router-dom';

function PrivateNav(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <a className="navbar-brand" href="/trending">
                Trending
              </a>
              <a className="navbar-brand" href="/watchlist">
                Watch List
              </a>
              <a className="navbar-brand" href="/search">
                Search
              </a>
            </nav>
        );
}

export default PrivateNav;