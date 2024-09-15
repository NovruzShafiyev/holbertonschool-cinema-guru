import React from 'react'
import './general.css';

const SearchBar = ({
	title,
	setTitle
	}) => {

	const handleInput = (event) => {
		setTitle(event.target.value);
	}

	return (
		<div className={general.searchBar}>
			<input
			type="text"
			placeholder="Search..."
			value={title}
			onChange={handleInput}
			/>
		</div>
	)
}
export default SearchBar
