import React from 'react';
import { Redirect } from 'react-router-dom';
import SignUpCard from "../components/SignUpCard";
import Landing from "../components/Landing";
import Auth from "../utils/Auth";
const axios = require("axios");
//The component for doing the actual signup of the User
class SignUp extends React.Component {
	state = {
		redirectToReferrer: false,
		userName: ""
	}
	register = (data) => {
		this.setState({userName: data.userName})
		axios.post('api/users/signup', data)
		// fetch('api/users/signup', {
		// 	method: 'POST',
		// 	body: JSON.stringify(data),
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	credentials: 'include'
		// })
		.then((response) => {
			if (response.status === 200) {
				console.log('Succesfully registered user!');
				Auth.authenticate(() => { //Update the boolean and take off the cuffs
                    this.setState({ redirectToReferrer: true });
				});
			}
		})
		.catch((err) => {
			console.log('Error registering user.', err);
		});
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: "/"+this.state.userName+'/trending' } }
		const { redirectToReferrer } = this.state
		if (redirectToReferrer) {
			return (
				<Redirect to={from}/>
			)
        } 
		return (
			<div>
                <Landing/>
				<h4>Register a New User</h4>
				<SignUpCard onRegister={this.register} />
			</div>
		)
	}
}

export default SignUp