import React from 'react'
import './auth.css'
import {faKey, faUser} from '@fortawesome/free-solid-svg-icons'
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";

const Login = ({
	username,
	password,
	setUsername,
	setPassword,
    }) => {
	return (
		<div className="loginpage">
			<h1>Sign in with your account</h1>
			<Input
				type='text'
				icon={faUser}
				label='Username: '
				value={username}
				classname="input username"
				setValue={setUsername}
			/>
			<Input
				type='password'
				icon={faKey}
				label="Password: "
				value={password}
				classname="input password"
				setValue={setPassword}
			/>
			<Button
				text="Sign in"
				classname="button"
				icon={faKey}
				type="submit"
			/>
		</div>
	)
}
export default Login
