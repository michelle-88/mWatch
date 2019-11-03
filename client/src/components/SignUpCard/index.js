import React from 'react'



class SignUpCard extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	passwordElem: null;

	render() {
		let { onRegister } = this.props;
		console.log(`Register form props are: ${JSON.stringify(this.props)}`);
		
		return (
			
				<form
					ref={(elem) => this.form = elem}
					onSubmit={(e) => {
						e.preventDefault();
						console.log(this.usernameElem.value)
						console.log(this.passwordElem.value)
						return onRegister({
							userName:  this.usernameElem.value,
							password: this.passwordElem.value
						});
					}}
				>
					<div className="form-group">
						<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' /><br/>
						<input className="form-control"  ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br/>
						<button className="btn btn btn-primary" type='submit'>Submit</button>
					</div>
				</form>
			
		)
	}
}

export default SignUpCard