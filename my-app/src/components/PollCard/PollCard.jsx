import { useState } from "react";
import "./PollCard.css";
import PollOption from "../PollOption/PollOption";
import Btn from "../Button/Btn";
import axios from "axios";

const PollCard = (props) => {
	const [isChecked, setIsChecked] = useState("");
	const [canVote, setCanVote] = useState(true);

	const handleClickVote = () => {
		props.triggerVote();
		setCanVote(false);
	};

  const handleDeletePoll = (id, e) => {
		//console.log(id);
		axios
			.delete(`http://localhost:8080/delete-polls/${id}`)
			.then((result) => {
        window.location.reload();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="poll-container">
			<h2 className="poll-title">{props.title}</h2>
			<p className="poll-description">Make a choice:</p>
			<div className="poll-choices-container">
				{props.optionsList.map((option, index) => (
					<PollOption
						key={index + 100}
						id={index}
						votingOption={props.votingOption}
						status={isChecked}
						canVote={canVote}
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
						onClick={(e) => handleDeletePoll(props.poll._id, e)}
					/>
				)}
				{canVote === false || isChecked === "" ? (
					""
				) : (
					<Btn
						name="Vote"
						class="vote-btn"
						onClick={handleClickVote}
						id={props.id}
					/>
				)}
			</div>
		</div>
	);
};

export default PollCard;
