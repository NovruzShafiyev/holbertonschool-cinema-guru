import React, {useState} from 'react'
import axios from "axios";
import Login from "./Login";
import Register from "./Register";

const Authentication = ({
	setIsLoggedIn,
	setUserUsername
	}) => {
	const [_switch, setSwitch] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSwitch = (value) => {
		setSwitch(value);
		setUsername("");
		setPassword("");
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (_switch) {
			axios.post(`http://localhost:8000/api/auth/login`, {
				username,
				password
			})
				.then((res) => {
					if (res.data.accessToken) {
						localStorage.setItem('accessToken', res.data.accessToken);
						setUserUsername(username);
						setIsLoggedIn(true);
					}
				});
		} else {
			axios.post(`http://localhost:8000/api/auth/register`, {
				username,
				password
			})
				.then((res) => {
					if (res.data.accessToken) {
						localStorage.setItem('accessToken', res.data.accessToken);
						setUserUsername(username);
						setIsLoggedIn(true);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	return (
		<div className="auth">
			<form className="authentication" onSubmit={handleSubmit}>
				<ul>
					<li
						onClick={() => handleSwitch(true)}
						className={_switch ? "active" : ""}
					>
						Sign in
					</li>
					<li
					onClick={() => handleSwitch(false)}
					className={!_switch ? "active" : ""}
					>
						Sign up
					</li>
				</ul>
				{
					_switch ? (
						<Login
							username={username}
							password={password}
							setUsername={setUsername}
							setPassword={setPassword}
						/>
					) : (
						<Register
							username={username}
							password={password}
							setUsername={setUsername}
							setPassword={setPassword}
						/>
					)
				}
			</form>
		</div>
	)
}
export default Authentication
