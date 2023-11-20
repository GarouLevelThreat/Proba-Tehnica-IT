import "./userInput.css";

function UserInput(props) {
	return (
		<div className="wrapper">
			<input type={props.type} placeholder={props.placeholder}></input>
		</div>
	);
}

export default UserInput;
