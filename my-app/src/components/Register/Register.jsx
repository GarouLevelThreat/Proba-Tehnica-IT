import "./register.css"
import {useState} from "react"
import Btn from "../Button/Btn"
import FormInput from "../FormInput/FormInput"

const Register = (props) => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const inputs = [
		{
			id: 1,
			name: "email",
			type: "text",
			placeholder: "Email",
			errorMessage: "",
			required: true,
		},
		{
			id: 2,
			name: "password",
			type: "password",
			placeholder: "Password",
			errorMessage:
				"Password should be 8-20 characters and it should include at least 1 letter, 1 number and 1 special character",
			required: true,
		},
		{
			id: 3,
			name: "confirmPassword",
			type: "password",
			placeholder: "Confirm Password",
			errorMessage: "Passwords don't match!",
			pattern: values.password,
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		//console.log(Object.fromEntries(data.entries()));
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	//console.log(values);
	return props.trigger ? (
		<>
			<div className="blur"></div>
			<div className="register-container">
				<form onSubmit={handleSubmit}>
					<Btn
						name="&#x2715;"
						class="close-btn"
						onClick={() => {
							props.setTrigger(false);
							props.setFooterTrigger(true);
						}}
					/>
					<h1 className="register-title">Register</h1>
					{inputs.map((input) => (
						<FormInput
							key={input.id}
							{...input}
							value={values[input.name]}
							onChange={onChange}
						/>
					))}
					<button className="register-btn" onClick={props.setRegisterStatus}>
						Register
					</button>
				</form>
			</div>
		</>
	) : (
		""
	);
}

export default Register