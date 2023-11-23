import "./pollCard.css";
import PollChoice from "../PollOption/PollOption";

function PollCard(props) {
	return (
		<div className="pollContainer">
			<h2 className="pollTitle">{props.title}</h2>
			<p className="pollDescription">Make a choice:</p>
			<div className="pollChoicesContainer">
				<PollChoice option="Un elefant" />
				<PollChoice option="O testoasa" />
				<PollChoice option="Un lenes" />
				<PollChoice option="Un caine" />
			</div>
		</div>
	);
}

export default PollCard;
