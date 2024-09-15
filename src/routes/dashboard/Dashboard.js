import React from 'react'
import Header from "../../components/navigation/Header";
import {BrowserRouter} from "react-router-dom";
import SideBar from "../../components/navigation/SideBar";

const Dashboard = ({
	userUsername,
	setIsLoggedIn
    }) => {
	return (
		<BrowserRouter>
			<div className="dashboard">
				<Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}>
					<h1>Dashboard</h1>
				</Header>
				<SideBar />
			</div>
		</BrowserRouter>
	)
}
export default Dashboard
