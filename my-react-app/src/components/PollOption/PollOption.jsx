import "./PollOption.css";
import Btn from "../Button/Btn";

function PollOption(props) {
	return (
		<div className="choiceContainer">
			<div className="btnContainer">
				<Btn class="radio-btn" name="" />
			</div>
			<div className="optionContainer">
				<p className="choiceOption">{props.option}</p>
			</div>
		</div>
	);
}

export default PollOption;
