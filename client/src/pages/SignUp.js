import React from 'react';
import SignUpCard from "../components/SignUpCard";
//The component for doing the actual signup of the User
class SignUp extends React.Component {
	state = {
		redirectToReferrer: false
	}

	register = (data) => {
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
				//relocate to the login page
				window.location.assign("/protected");
			}
		})
		.catch((err) => {
			console.log('Error registering user.', err);
		});
	}

	render() {
		return (
			<div>
                {/* <Landing/> */}
				<h4>Register a New User</h4>
				<SignUpCard onRegister={this.register} />
			</div>
		)
	}
}

export default SignUp