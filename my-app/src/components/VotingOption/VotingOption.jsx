import "./votingOption.css";

function VotingOption(props) {
	return (
		<div className="voting-choice-container">
			<input type="radio" className="radio-btn"/>
			<div className="voting-option-container">
				<p className="voting-choice-option">{props.option}</p>
			</div>
		</div>
	);
}

export default VotingOption;