import "./createPoll.css"
import {useState} from "react"
import Btn from "../Button/Btn";
import CreatePollInput from "../../components/CreatePollInput/CreatePollInput";
import VotingOption from "../VotingOption/VotingOption";
import axios from "axios";

const CreatePoll = (props) => {
	const [idValue, setIdValue] = useState(4);
	const [title, setTitle] = useState("");

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const [votingOption, setVotingOption] = useState("0");

	const [pollOptions, setPollOptions] = useState([
		{
			id: "1",
			input: "",
			placeholder: "Option 1",
		},
		{
			id: "2",
			input: "",
			placeholder: "Option 2",
		},
		{
			id: "3",
			input: "",
			placeholder: "Option 3",
		},
	]);

	const handlePollOptionChange = (index) => (e) => {
		let newPollOptions = [...pollOptions];
		newPollOptions[index].input = e.target.value;

		setPollOptions(newPollOptions);
	};

	const handleAddOption = () => {
		const addOption = {
			id: `${idValue}`,
			input: "",
			placeholder: `Option ${idValue}`,
		};

		setIdValue(idValue + 1);
		const newPollOptions = pollOptions.concat(addOption);

		setPollOptions(newPollOptions);
	};

	const handleDeleteOption = (deleteOption) => {
		//console.log(deleteOption.target);
		let deleteOptionId = deleteOption.target.id;

		//console.log(deleteOptionId);
		const newPollOptions = pollOptions.filter(
			(option) => deleteOptionId !== option.id
		);
		setPollOptions(newPollOptions);
	};

	const listPollOptions = pollOptions.map((option, index) => (
		<CreatePollInput
			key={option.id}
			id={option.id}
			input={option.input}
			placeholder={option.placeholder}
			onChange={handlePollOptionChange(index)}
			triggerDelete={handleDeleteOption}
		/>
	));

	const inputs = {
		title: title,
		votingOption: votingOption,
		pollOptions: pollOptions,
	};

	const handleSubmit = () => {
		e.preventDefault();

		axios
			.post("http://localhost:8080/create-poll", inputs)
			.then((result) => console.log(result))
			.catch((err) => console.log(err));

		console.log(inputs);
	};

	return props.trigger ? (
		<>
			<div className="blur"></div>
			<div className="create-poll-container">
				<form onSubmit={handleSubmit}>
					<Btn
						name="&#x2715;"
						class="close-btn"
						onClick={() => {
							props.setTrigger(false);
							props.setFooterTrigger(true);
						}}
					/>
					<h1 className="create-poll-title">Create a Poll</h1>
					<div className="inputs-container">
						<p className="section-description">Title</p>
						<CreatePollInput
							placeholder="Type your question here"
							render={false}
							onChange={handleTitleChange}
						/>

						<p className="section-description">Voting Type</p>
						<VotingOption
							option="Single Choice"
							id="0"
							status={votingOption}
							onChange={setVotingOption}
						/>
						<VotingOption
							option="Multiple Choice"
							id="1"
							status={votingOption}
							onChange={setVotingOption}
						/>

						<p className="section-description">Answer Options</p>
						<div className="options-container">
							{listPollOptions}
							<Btn
								name="+ Add Option"
								class="add-option-btn"
								onClick={handleAddOption}
							/>
						</div>
					</div>
					<Btn
						name="Create Poll"
						class="create-poll-btn"
						onClick={() => {
							props.setTrigger(false);
							props.setFooterTrigger(true);
							props.addPoll(inputs);
						}}
					/>
				</form>
			</div>
		</>
	) : (
		""
	);
};

export default CreatePoll