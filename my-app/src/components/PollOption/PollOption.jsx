import "./PollOption.css";

const PollOption = (props) => {
	const handleChange = () => {
		if (props.canVote !== false) props.onChange(props.id);
	};

	return (
		<div className="choice-container">
			<input
				type="radio"
				className="radio-btn"
				checked={
					/*
					(props.votingOption === "0" && props.status === props.id) ||
					props.votingOption === "1"
          */
					props.status === props.id
				}
				onChange={handleChange}
			/>
			<div className="option-container">
				<p className="choice-option">{props.option}</p>
			</div>
		</div>
	);
};

export default PollOption;
