import React from "react";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/search" component={Search} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;
