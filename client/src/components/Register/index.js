import React from 'react';
import { Redirect } from 'react-router-dom';
import RegisterForm from "../RegisterForm";
import Auth from "../../utils/Auth";
//The component for doing the actual signup of the User
class Register extends React.Component {
	state = {
		redirectToReferrer: false,
		username: ""
	}

	register = (data) => {
		console.log('Signing up ' + data.username);
		this.setState({ username: data.username });
		fetch('api/users/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		.then((response) => {
			if (response.status === 200) {
				console.log('Succesfully registered user!');
				Auth.authenticate(() => { //Update the boolean and take off the cuffs
					this.setState({ redirectToReferrer: true })
				});
			}
		})
		.catch((err) => {
			console.log('Error registering user.', err);
		});
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' + this.state.username + '/trending' } }
		const { redirectToReferrer } = this.state
		
		if (redirectToReferrer) {
			return (
				<Redirect to={from}/>
			)
		}
		return (
			<div>
				<h4>Register a New User</h4>
				<RegisterForm onRegister={this.register} />
			</div>
		)
	}
}

export default Register