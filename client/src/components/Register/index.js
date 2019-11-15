import React from 'react';
import { Redirect } from 'react-router-dom';
import RegisterForm from "../RegisterForm";
import Auth from "../../utils/Auth";
import Landing from "../Landing";
import LandingImage from "../LandingImage"

//The component for doing the actual signup of the User
class Register extends React.Component {
	state = {
		redirectToReferrer: false,
		username: ""
	}

	register = (data) => {
		console.log('Signing up ' + data.username);
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
		const { from } = this.props.location.state || { from: { pathname: '/login' } }
		const { redirectToReferrer } = this.state
		
		if (redirectToReferrer) {
			return (
				<Redirect to={from}/>
			)
		}
		return (
			<div className="bg-dark">
				<Landing/>
				<RegisterForm onRegister={this.register} />
				<LandingImage/>
			</div>
		)
	}
}

export default Register;