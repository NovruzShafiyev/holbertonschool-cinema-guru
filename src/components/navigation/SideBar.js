import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolder} from "@fortawesome/free-solid-svg-icons";
import Activity from "../Activity";

const SideBar = () => {
	const [selected, setSelected] = useState('home');
	const [small , setSmall] = useState(true);
	const [activities, setActivities] = useState([]);
	const [showActivities, setShowActivities] = useState(false);

	const navigate = useNavigate();

	const setPage =  (page) => {
		setSelected(page);
		navigate(`/${page}`);
	};

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');
		axios.get('http://localhost:8080/api/activities',
			{
				headers: {
					'Authorization': `Bearer ${accessToken}`
				}
			}).then(res => setActivities(res.data));
	}, []);

	return (
		<nav className="sidebar">
			<ul className="sidebar_link">
				<li
					className={selected === "home" ? "active" : ""}
					onClick={() => setPage("home")}
				>
					<FontAwesomeIcon icon={faFolder} />
					<p>Home</p>
				</li>
				<li
					className={selected === "favorites" ? "active" : ""}
					onClick={() => setPage("favorites")}
				>
					<FontAwesomeIcon icon={faStar} />
					<p>Favorites</p>
				</li>
				<li
					className={selected === "watchlater" ? "active" : ""}
					onClick={() => setPage("watchlater")}
				>
					<FontAwesomeIcon icon={faClock} />
					<p>Watch Later</p>
				</li>
			</ul>

			<div className="sidebar_activities">
				<button onClick={() => setShowActivities(true)}>Show Activities</button>
				{showActivities && (
					<ul className="activities">
						{activities.map((activity) => (
							<Activity key={activity.id} username={activity.username} title={activity.title} date={activity.date} />
						))}
					</ul>
				)}
			</div>
		</nav>
	)
}
export default SideBar
