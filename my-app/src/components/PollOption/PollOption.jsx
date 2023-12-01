import "./PollOption.css";
import { useState } from "react";

const PollOption = (props) => {
	const handleChange = () => {
		props.onChange(props.id);
	};

	return (
		<div className="choice-container">
			<input
				type="radio"
				className="radio-btn"
				checked={props.status === props.id}
				onChange={handleChange}
			/>
			<div className="option-container">
				<p className="choice-option">{props.option}</p>
			</div>
		</div>
	);
};

export default PollOption;