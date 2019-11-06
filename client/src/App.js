import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
  Redirect,
  Switch,
	withRouter
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import {Login, usernameTransfer} from "./components/Login";
import Register from "./components/Register";
// import PublicRoute from "./pages/PublicRoute";
// import ProtectedRoute from "./pages/PublicRoute";
import Trending from "./pages/Trending";
import Search from "./pages/Search";
import {WatchList} from "./pages/WatchList";
import Home from "./pages/Home";
import Details from "./pages/Details";
import './App.css';
require('dotenv').config();

//I want to add some basic inline styling here, even though we are bringing in styles
const listStyle = {
	color: 'cornflowerblue',
	listStyle:'none'
  };
//Now we have all the stuff we need .. let's render some components with the Router
class App extends React.Component {
	render() {
		return (
	<Router>

		<div className="bg-dark">
			<Nav className="App-header"/>
			{/* <AuthButton/> */}
			{/* <ul style={listStyle}>
				<li><Link to="/public">Public Page</Link></li>
				<li><Link to="/protected">Protected Page</Link></li>
				<li><Link to="/register">Register a New User</Link></li>
			</ul> */}
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/login" component={Login}/>
				<Route exact path="/register" component={Register}/>
				<PrivateRoute exact path="/trending" component={Trending}/>
				<PrivateRoute exact path="/search" component={Search}/>
				<PrivateRoute exact path="/watchlist" component={WatchList}/>				
				<PrivateRoute path="/peanutgallery" component={Details}/>				
				{/* <Route component={NoMatch} /> */}
			</Switch>

		</div>
	</Router>
		)
	}
}


//Authbutton component / withRouter is imported from react-router
// const AuthButton = withRouter(({ history }) => (
// 	Auth.isAuthenticated ? (
// 		<div className="container bg-dark">
// 			<p className="text-white">Success! You are Logged In!</p>
// 			<button className="btn btn-danger" 
// 				onClick={() => {
// 					Auth.signout(() => history.push('/'))
// 				}}>
// 				Sign out
// 			</button>
// 		</div>
// 	) : (
// 		<p className="text-white">You are not logged in.</p>
// 	)
// ))

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

