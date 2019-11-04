import React from "react";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import DetailsPage from "./pages/Details";
import Trending from "./pages/Trending"
import WatchList from "./pages/WatchList";

import { BrowserRouter as Router, Route, Redirect, Link, Switch, withRouter } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/trending" component={Trending}/>
        <Route exact path="/search" component={Search} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/watchlist" component={WatchList} />
        <Route exact path="/api/users/showdetails/:id" component={DetailsPage} />
        <Route component={NoMatch} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;
