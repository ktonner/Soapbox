import React, { useRef } from 'react'
import Card from "../Card"

// class RegisterForm extends React.Component {
function RegisterForm({ onRegister }) {
	// refs
	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div className="row">
			<div className="col-md-6">
		<Card title="Register a New User">
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onRegister({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="form-group">
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<button className="btn btn btn-primary" type='submit'>Submit</button>
				</div>
			</form>
		</Card>
		</div>
		</div>
	)
}


export default RegisterForm