import "./PollCard.css";
import PollOption from "../PollOption/PollOption";

function PollCard(props) {
	return (
		<div className="pollContainer">
			<h2 className="pollTitle">{props.title}</h2>
			<p className="pollDescription">Make a choice:</p>
			<div className="pollChoicesContainer">
				<PollOption option="Un elefant" />
				<PollOption option="Un elefant" />
				<PollOption option="Un elefant" />
				<PollOption option="Un elefant" />
			</div>
		</div>
	);
}

export default PollCard;