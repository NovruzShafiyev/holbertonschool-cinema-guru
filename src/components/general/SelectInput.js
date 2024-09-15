import React from 'react'

const SelectInput = ({
	label,
	options,
	multiple,
	className,
	value,
	setValue
    }) => {

	const handleSelect = (event) => {
		setValue(event.target.value)
	}

	return (
		<div className={className}>
			<label>{label}</label>
			<select value={value} onChange={handleSelect} multiple={multiple}>
				{
					options.map(option => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))
				}
			</select>
		</div>
	)
}
export default SelectInput
