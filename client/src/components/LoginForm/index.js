import React from 'react';

const styles = {
	formPadding: {
		paddingLeft: "15%",
		paddingRight: "15%"
	}
}

class LoginForm extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	passwordElem: null;

	render() {
		const { onLogin } = this.props;
		return (
				<form
					ref={(elem) => this.form = elem}
					onSubmit={(e) => {
						e.preventDefault();
						return onLogin({
							username: this.usernameElem.value,
							password: this.passwordElem.value
						});
					}} 
				className="bg-dark">
					<div className="form-group container" style={styles.formPadding}>
						<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' /><br/>
						<input className="form-control" ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br/>
						<div className="d-flex flex-row-reverse">
						<button className="btn btn-white text-dark" type='submit'>
							Login
						</button>
						</div>
					</div>
				</form>
		)
	}
}

export default LoginForm