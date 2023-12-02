import "./createPoll.css"
import {useState} from "react"
import Btn from "../Button/Btn";
import CreatePollInput from "../../CreatePollInput/CreatePollInput";
import VotingOption from "../VotingOption/VotingOption";
import FormInput from "../FormInput/FormInput";

const CreatePoll = (props) => {
	const [idValue, setIdValue] = useState(4);
	const [pollOptions, setPollOptions] = useState([
		{
			id: "1",
			info: "",
			placeholder: "Option 1",
		},
		{
			id: "2",
			info: "a",
			placeholder: "Option 2",
		},
		{
			id: "3",
			info: "",
			placeholder: "Option 3",
		},
	]);
	const [isChecked, setIsChecked] = useState("");

	const handleAddOption = () => {
		const addOption = {
			id: `${idValue}`,
			info: "",
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

	const listPollOptions = pollOptions.map((option) => (
		<CreatePollInput
			key={option.id}
			id={option.id}
			info={option.info}
			placeholder={option.placeholder}
			triggerDelete={handleDeleteOption}
		/>
	));

	/*
	const [inputs, setInputs] = useState({
		title: "",
		optionsList: listPollOptions,
	});

	const onTitleChange = (e) => {
		setInputs({ ...inputs, title: e.target.value });
		//console.log(inputs.title);
	};

	console.log(inputs);
  */

	return props.trigger ? (
		<>
			<div className="blur"></div>
			<div className="create-poll-container">
				<form>
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
						/>

						<p className="section-description">Voting Type</p>
						<VotingOption
							option="Single Choice"
							id="0"
							status={isChecked}
							onChange={setIsChecked}
						/>
						<VotingOption
							option="Multiple Choice"
							id="1"
							status={isChecked}
							onChange={setIsChecked}
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
					<button className="create-poll-btn">Create Poll</button>
				</form>
			</div>
		</>
	) : (
		""
	);
};

export default CreatePoll