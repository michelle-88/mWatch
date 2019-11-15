import React from 'react'
import {
	BrowserRouter as Router,
	Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import {Login} from "./components/Login";
import Register from "./components/Register";
import Trending from "./pages/Trending";
import Search from "./pages/Search";
import {WatchList} from "./pages/WatchList";
import Home from "./pages/Home";
import Details from "./pages/Details";
import './App.css';
require('dotenv').config();

//Now we have all the stuff we need .. let's render some components with the Router
class App extends React.Component {
	render() {
		return (
	<Router>
		<div className="bg-dark">
			<Nav className="App-header"/>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/login" component={Login}/>
				<Route exact path="/register" component={Register}/>
				<PrivateRoute exact path="/trending" component={Trending}/>
				<PrivateRoute exact path="/search" component={Search}/>
				<PrivateRoute exact path="/watchlist" component={WatchList}/>				
				<PrivateRoute path="/peanutgallery" component={Details}/>				
			</Switch>
		</div>
	</Router>
		)
	}
}

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)

export default App;

