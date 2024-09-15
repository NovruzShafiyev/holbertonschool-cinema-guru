import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './general.css';

const Input = ({
	label,
	type,
	classname,
	value,
	setValue,
	icon,
	inputAttributes
    }) => {

	const handleInput = (event) => {
		setValue(event.target.value);
	}

	return (
		<div className={classname}>
			<div>
				{ icon && <FontAwesomeIcon icon={icon} />}
				<label>{label}</label>
			</div>
			<input
				type={type}
				value={value}
				onClick={handleInput}
				{...inputAttributes}
			/>
		</div>
	)
}
export default Input
