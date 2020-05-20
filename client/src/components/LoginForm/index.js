import React, { useRef } from 'react'
import Card from "../Card"
import './style.css'
import Col from 'react-bootstrap/Col'

function LoginForm({ onLogin }) {

	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div className="row">
			<div className="col-md-6 mx-auto mt-5">
		<h2 style={{color:"white", textAlign:"center", padding:"8px"}} className="mx-auto">Login to Soapbox</h2>
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onLogin({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="form-group">
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<button className="btn btn-success login" type='submit'>
						Login
						</button>
				</div>
			</form>
		</div>
		</div>
	)
}


export default LoginForm