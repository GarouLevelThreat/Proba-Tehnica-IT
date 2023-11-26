import "./PollOption.css";

function PollOption(props) {
	return (
		<div className="choice-container">
			<input type="radio" className="radio-btn"/>
			<div className="option-container">
				<p className="choice-option">{props.option}</p>
			</div>
		</div>
	);
}

export default PollOption;