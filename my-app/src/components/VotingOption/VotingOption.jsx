import "./votingOption.css";

function VotingOption(props) {
  const handleChange = () => {
		props.onChange(props.id);
	};

	return (
		<div className="voting-choice-container">
			<input
				type="radio"
				className="radio-btn"
				id={props.id}
				checked={props.status === props.id}
				onChange={handleChange}
			/>
			<div className="voting-option-container">
				<p className="voting-choice-option">{props.option}</p>
			</div>
		</div>
	);
}

export default VotingOption;