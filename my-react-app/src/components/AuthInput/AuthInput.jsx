import "./AuthInput.css";

function AuthInput(props) {
	return (
		<div className="wrapper">
			<input type={props.type} placeholder={props.placeholder}></input>
		</div>
	);
}

export default AuthInput;
