import React from 'react'
import Input from "../../components/general/Input";
import {faKey, faUser} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/general/Button";

const Register = ({
	username,
	password,
	setUsername,
	setPassword,
    }) => {
	return (
		<div className="loginpage">
			<h1>Create your account</h1>
			<div>
				<Input
					type='text'
					icon={faUser}
					label='Username: '
					placeholder="Username"
					value={username}
					classname="input username"
					setValue={setUsername}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Input
					type='password'
					icon={faKey}
					label='Password: '
					placeholder="Password"
					value={password}
					classname="input password"
					setValue={setPassword}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					text="Sign up"
					classname="button"
					icon={faKey}
					type="submit"
				/>
			</div>
		</div>
	)
}
export default Register
