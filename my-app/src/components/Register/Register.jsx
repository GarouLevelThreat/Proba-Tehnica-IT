import "./register.css"
import {useState} from "react"
import Btn from "../Button/Btn"
import FormInput from "../FormInput/FormInput"
import axios from "axios";

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
			type: "email",
			placeholder: "Email",
			errorMessage: "Email is not valid!",
			/*
			pattern: "[\\w+(.\\w+)+]+@gmail.com$",
      */
			required: true,
		},
		{
			id: 2,
			name: "password",
			type: "password",
			placeholder: "Password",
			errorMessage:
				"Password should be 8-32 characters and it should include at least 1 uppercase, 1 lowercase, 1 number and 1 special character",
			/*
			pattern: "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,32}$",
      */
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

	const data = {
		email: values.email,
		password: values.password,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8080/register", data)
			.then((result) => {
				console.log(result);
				if (result.data === "User already exists!") {
					alert(result.data);
				} else {
					props.setTrigger(false);
					props.setIsUserRegistered(true);
					props.setFooterTrigger(true);
				}
			})
			.catch((err) => console.log(err));
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

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
					<button className="register-btn">Register</button>
				</form>
			</div>
		</>
	) : (
		""
	);
};

export default Register