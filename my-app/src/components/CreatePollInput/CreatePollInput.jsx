import "./createPollInput.css";
import Btn from "../../components/Button/Btn";

const CreatePollInput = (props) => {
	const { onChange, ...inputProps } = props;

	return (
		<div className="create-poll-input">
			<input {...inputProps} onChange={onChange} />
			<Btn
				class="delete-field-btn"
				name="&#x2715;"
				id={props.id}
				onClick={props.triggerDelete}
				render={props.render}
			/>
		</div>
	);
};

export default CreatePollInput;
