import { useState } from "react";
import "./PollCard.css";
import PollOption from "../PollOption/PollOption";
import Btn from "../Button/Btn";

const PollCard = (props) => {
	const [isChecked, setIsChecked] = useState("");
  const [canVote, setCanVote] = useState(true);

	return (
		<div className="poll-container">
			<h2 className="poll-title">{props.title}</h2>
			<p className="poll-description">Make a choice:</p>
			<div className="poll-choices-container">
				{props.optionsList.map((option, index) => (
					<PollOption
						key={index + 100}
						id={index}
						status={isChecked}
						onChange={setIsChecked}
						option={option}
					/>
				))}
			</div>
			<div className="poll-btn-container">
				{props.isUserLogged === false ? (
					""
				) : (
					<Btn
						name="Delete"
						class="delete-btn"
						onClick={props.triggerDelete}
						id={props.id}
					/>
				)}
				{canVote === false || isChecked === "" ? (
					""
				) : (
					<Btn
						name="Vote"
						class="vote-btn"
						onClick={props.triggerVote}
						id={props.id}
					/>
				)}
			</div>
		</div>
	);
};

export default PollCard;
