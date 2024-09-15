import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Button = ({
	text,
	className,
	onClick,
	icon
    }) => {
	return (
		<button className={className} onClick={onClick}>
			{icon && <FontAwesomeIcon icon={icon} />}
				{text}
		</button>
	)
}
export default Button
