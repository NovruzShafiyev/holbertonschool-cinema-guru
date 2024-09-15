import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import './navigation.css'

const Header = ({
	userUsername,
	setIsLoggedIn
    }) => {
	const logout = () => {
		localStorage.removeItem('token')
		setIsLoggedIn(false);
	}
	return (
		<nav className="header">
			<h1>Cinema Guru</h1>
			<img src='https://picsum.photos/100/100' alt='avatar' />
			<p>Welcome, {userUsername}</p>
			<span onClick={logout}>
				<FontAwesomeIcon icon={faRightFromBracket} />
			</span>
		</nav>
	)
}
export default Header
